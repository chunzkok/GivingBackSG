import React, { useContext } from "react";
import AuthContext from "../../utils/AuthContext";
import SidebarStyles from "./sideNavbar.module.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";
import Skeleton from "react-loading-skeleton";
import {
  Calendar2Heart,
  BoxArrowInLeft,
  BoxArrowRight,
  PencilSquare,
} from "react-bootstrap-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleNodes,
  faUserGroup,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

const SideNavbar = ({ children, activePath }) => {
  const { authData, authLoading } = useContext(AuthContext);

  const signOutHandler = async () => {};

  return (
    <Container className="d-flex flex-row p-0" fluid>
      <Col
        xs={4}
        md={3}
        xxl={2}
        className={`${SidebarStyles["sidebar"]}`}
        style={{ minHeight: "100vh" }}
      >
        <Nav
          activeKey={activePath}
          className="flex-column position-relative"
          variant="pills"
          fill
        >
          <Nav.Link href="/">
            <img
              src="/images/gbs_logo_long.png"
              alt="Giving Back Singapore"
              className="w-100"
            />
          </Nav.Link>
          <Nav.Item className="d-flex flex-column mx-auto py-3 ">
            {authLoading ? (
              <>
                <Skeleton circle width="13vw" height="13vw" className="py-2" />
                <Skeleton width="50%" height="25px" />
              </>
            ) : (
              <>
                <Image
                  src={authData.avatar_url}
                  className="w-50 mx-auto py-2"
                />
                <p>{authData.name}</p>
              </>
            )}
          </Nav.Item>
          <Nav.Link
            href="/browse"
            className="d-flex justify-content-center align-items-center"
          >
            <Calendar2Heart className="mx-2" /> Events
          </Nav.Link>

          <Nav.Link
            href="/community"
            className="d-flex justify-content-center align-items-center"
          >
            <FontAwesomeIcon icon={faCircleNodes} className="mx-2" />
            Community
          </Nav.Link>

          <Nav.Link
            href="/friends"
            className="d-flex justify-content-center align-items-center"
          >
            <FontAwesomeIcon icon={faUserGroup} className="mx-2" />
            Friends
          </Nav.Link>

          <Nav.Link
            href="/history"
            className="d-flex justify-content-center align-items-center"
          >
            <FontAwesomeIcon icon={faClockRotateLeft} className="mx-2" />
            History
          </Nav.Link>

          <Nav.Item style={{ height: "50px" }} />
          {authLoading ? (
            <Skeleton width="100%" height="25px" />
          ) : authData.logged_in ? (
            <Nav.Link
              className="d-flex justify-content-center align-items-center"
              onClick={signOutHandler}
            >
              <BoxArrowRight className="mx-2" /> Sign Out
            </Nav.Link>
          ) : (
            <>
              <Nav.Link
                href="/login"
                className="d-flex justify-content-center align-items-center"
              >
                <BoxArrowInLeft className="mx-2" />
                Login
              </Nav.Link>
              <Nav.Link
                href="/register"
                className="d-flex justify-content-center align-items-center"
              >
                <PencilSquare className="mx-2" />
                Register
              </Nav.Link>
            </>
          )}
        </Nav>
      </Col>
      <Col xs={8} md={9} xxl={10}>
        {children}
      </Col>
    </Container>
  );
};

export default SideNavbar;
