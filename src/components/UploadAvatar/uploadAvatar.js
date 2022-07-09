import React from "react";
import useDebounceEffect from "./useDebounceEffect";
import { useEffect, useState, useRef } from "react";
import supabase from "../../config/supabase";
import avatarStyle from "./uploadAvatar.module.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import ReactCrop, { centerCrop, makeAspectCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import Spinner from "react-bootstrap/Spinner";

function centerAspectCrop(mediaWidth, mediaHeight, aspect) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

const UploadAvatar = ({ url, onUpload, loading }) => {
  const [avatarUrl, setAvatarUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [tempAvatar, setTempAvatar] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [crop, setCrop] = useState();
  const [completedCrop, setCompletedCrop] = useState();
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);
  const aspect = 1;

  useEffect(() => {
    if (!url) return;

    let { publicURL, error } = supabase.storage
      .from("avatars")
      .getPublicUrl(url);
    if (error) alert(error.message);
    setAvatarUrl(publicURL);
  }, [url]);

  const uploadAvatar = async (event) => {
    setCrop(null);
    setTempAvatar(URL.createObjectURL(event.target.files[0]));
    setModalShow(true);
  };

  async function canvasPreview(image, canvas, crop, scale = 1, rotate = 0) {
    const ctx = canvas.getContext("2d");

    if (!ctx) {
      throw new Error("No 2d context");
    }

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    // devicePixelRatio slightly increases sharpness on retina devices
    // at the expense of slightly slower render times and needing to
    // size the image back down if you want to download/upload and be
    // true to the images natural size.
    const pixelRatio = window.devicePixelRatio;
    // const pixelRatio = 1

    canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
    canvas.height = Math.floor(crop.height * scaleY * pixelRatio);

    ctx.scale(pixelRatio, pixelRatio);
    ctx.imageSmoothingQuality = "high";
    const cropX = crop.x * scaleX;
    const cropY = crop.y * scaleY;
    const centerX = image.naturalWidth / 2;
    const centerY = image.naturalHeight / 2;

    ctx.save();

    // 5) Move the crop origin to the canvas origin (0,0)
    ctx.translate(-cropX, -cropY);
    // 4) Move the origin to the center of the original position
    ctx.translate(centerX, centerY);
    // 3) Rotate around the origin

    ctx.translate(-centerX, -centerY);
    ctx.drawImage(
      image,
      0,
      0,
      image.naturalWidth,
      image.naturalHeight,
      0,
      0,
      image.naturalWidth,
      image.naturalHeight
    );

    ctx.restore();
  }

  const uploadImage = async (canvas) => {
    canvas.toBlob(
      async (blob) => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error("Canvas is empty");
          return;
        }
        const fileName = `${Math.random()}.jpg`;
        const file = new File([blob], fileName, { type: "image/jpeg" });

        try {
          // Delete previous avatar from Supabase storage
          setUploading(true);
          if (avatarUrl) {
            const oldFileName = avatarUrl.split("/").at(-1);
            let { error } = await supabase.storage
              .from("avatars")
              .remove([oldFileName]);
            if (error) throw error;
          }

          // Upload cropped image
          let { error } = await supabase.storage
            .from("avatars")
            .upload(fileName, file);
          if (error) throw error;

          // Update avatar_url in profiles
          let { error: avatarError } = await supabase
            .from("profiles")
            .update({ avatar_url: fileName })
            .eq("id", supabase.auth.user().id);
          if (avatarError) throw avatarError;

          let { publicURL, error: getURLError } = supabase.storage
            .from("avatars")
            .getPublicUrl(fileName);
          if (getURLError) throw getURLError;

          setAvatarUrl(publicURL);
          onUpload(fileName);
        } catch (error) {
          alert(error.message);
        } finally {
          setUploading(false);
        }
      },
      "image/jpeg",
      1
    );
  };

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        canvasPreview(imgRef.current, previewCanvasRef.current, completedCrop);
      }
    },
    100,
    [completedCrop]
  );

  function onImageLoad(e) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  return (
    <div className="d-flex flex-column align-center ">
      {uploading || loading ? (
        <div className={`${avatarStyle["avatarmaster"]} border border-dark`}>
          <Spinner animation="border" />
        </div>
      ) : avatarUrl ? (
        <img
          className={`${avatarStyle["avatarmaster"]} border border-dark`}
          src={avatarUrl}
          alt={"avatar"}
        />
      ) : (
        <label
          htmlFor="single"
          className={`${avatarStyle["avatarmaster"]} border border-dark`}
        >
          Insert Photo
        </label>
      )}

      <input
        className={avatarStyle["hidden-file-input"]}
        type="file"
        id="single"
        accept="image/*"
        onClick={(e) => (e.target.value = null)}
        onChange={uploadAvatar}
        disabled={uploading}
      />

      <Modal size="lg" show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Title>
          <Modal.Header className="nunito-semi-bold-black-24px" closeButton>
            Crop Profile Picture
          </Modal.Header>
        </Modal.Title>
        <Modal.Body className="d-flex justify-center">
          <ReactCrop
            crop={crop}
            ruleOfThirds
            circularCrop={true}
            onChange={(_, percentCrop) => setCrop(percentCrop)}
            onComplete={(c) => setCompletedCrop(c)}
            aspect={aspect}
          >
            <img
              ref={imgRef}
              src={tempAvatar}
              onLoad={onImageLoad}
              alt="Crop me"
            ></img>
          </ReactCrop>

          {completedCrop && (
            <canvas
              ref={previewCanvasRef}
              style={{
                visibility: "hidden",
                position: "absolute",
              }}
            />
          )}
        </Modal.Body>
        <Modal.Footer className={uploading && "d-flex justify-center"}>
          {uploading ? (
            <Spinner animation="border" />
          ) : (
            <>
              <Button
                variant="outline-secondary"
                onClick={() => setModalShow(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={async () => {
                  await uploadImage(previewCanvasRef.current);
                  setModalShow(false);
                }}
              >
                Confirm
              </Button>
            </>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default UploadAvatar;
