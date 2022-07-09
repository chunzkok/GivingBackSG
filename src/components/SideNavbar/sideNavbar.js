import React from "react";
import SidebarStyles from "./sideNavbar.module.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { Calendar2Heart, BoxArrowInLeft } from "react-bootstrap-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleNodes,
  faUserGroup,
  faClockRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

const SideNavbar = ({ children, activePath }) => {
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
          className="flex-column"
          variant="pills"
          fill
        >
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
          <Nav.Link
            href="/login"
            className="d-flex justify-content-center align-items-center"
          >
            <BoxArrowInLeft className="mx-2" />
            Login
          </Nav.Link>
        </Nav>
      </Col>
      <Col xs={8}>{children}</Col>
    </Container>
  );
};

export default SideNavbar;