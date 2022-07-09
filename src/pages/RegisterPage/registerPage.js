import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideNavbar from "../../components/SideNavbar/sideNavbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import UploadAvatar from "../../components/UploadAvatar/uploadAvatar";
import supabase from "../../config/supabase";

const RegisterPage = () => {
  const [uploading, setUploading] = useState(false);
  const [avatarData, setAvatarData] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setUploading(true);
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const telegram = e.target[3].value;
    const phone = e.target[4].value;
    // beneficiary not recorded as of this time
    const profileData = {
      name,
      telegram,
      phone,
    };
    try {
      if (avatarData) {
        const fileName = `${Math.random()}.jpg`;
        const file = new File([avatarData], fileName, { type: "image/jpeg" });

        // Upload cropped image
        let { error: storageError } = await supabase.storage
          .from("avatars")
          .upload(fileName, file);
        if (storageError) throw storageError;

        profileData["avatar_url"] = fileName;
      }

      const { user, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });
      if (signUpError) throw signUpError;

      const { error: profileError } = await supabase
        .from("profiles")
        .insert({ ...profileData, id: user.id });
      if (profileError) throw profileError;
      alert(
        "Sign Up successful. Please check your email for the verification link before logging in."
      );
      navigate("/login");
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <SideNavbar activePath="/register">
      <UploadAvatar
        url={avatarData && URL.createObjectURL(avatarData)}
        onUpload={setAvatarData}
      />
      <Form className="p-4" onSubmit={handleRegister}>
        <Form.Group as={Row} className="mb-3" controlId="formName">
          <Form.Label column sm={3} className="d-flex flex-row">
            Name: <p className="text-danger">*</p>
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="text" placeholder="Name" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formEmail">
          <Form.Label column sm={3} className="d-flex flex-row">
            Email: <p className="text-danger">*</p>
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="email" placeholder="Email" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-2" controlId="formPassword">
          <Form.Label column sm={3} className="d-flex flex-row">
            Password: <p className="text-danger">*</p>
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="password" placeholder="Password" required />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formTelegram">
          <Form.Label column sm={3} className="d-flex flex-row">
            Telegram ID:
          </Form.Label>
          <Col sm={9} className="d-flex align-items-center">
            <Form.Control type="text" placeholder="@telegram_handle" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formTelegram">
          <Form.Label column sm={3} className="d-flex flex-row">
            Phone Number:
          </Form.Label>
          <Col sm={9} className="d-flex align-items-center">
            <Form.Control type="text" placeholder="Phone Number" />
          </Col>
        </Form.Group>

        <fieldset>
          <Form.Group as={Row} className="mb-3">
            <Form.Label
              as="legend"
              column
              sm={5}
              className="d-flex align-start my-auto"
            >
              Preferred Beneficiary:
            </Form.Label>
            <Col
              sm={7}
              className="d-flex justify-content-start flex-column text-start"
            >
              <Form.Check
                type="radio"
                label="Elderly"
                name="formBeneficiaries"
                id="beneficiary-elderly"
              />
              <Form.Check
                type="radio"
                label="Children"
                name="formBeneficiaries"
                id="beneficiary-children"
              />
              <Form.Check
                type="radio"
                label="Animals"
                name="formBeneficiaries"
                id="beneficiary-animals"
              />
              <Form.Check
                type="radio"
                label="Underprivileged"
                name="formBeneficiaries"
                id="beneficiary-underprivileged"
              />
            </Col>
          </Form.Group>
        </fieldset>

        <Button type="submit" disabled={uploading}>
          {uploading ? <Spinner animation="border" size="sm" /> : "Register"}
        </Button>
      </Form>
    </SideNavbar>
  );
};

export default RegisterPage;
