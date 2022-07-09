import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import SideNavbar from "../../components/SideNavbar/sideNavbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const LoginPage = () => {
  return (
    <SideNavbar activePath="/login">
      <Container className="py-4">
        <Image src="/images/gbs_logo_long.png" className="w-75 mx-auto" />
        <Form className="pt-5 pb-4">
          <Form.Group className="mb-4" controlId="formEmail">
            <Form.Label className="d-flex px-1 fs-5">Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email..." />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formPassword">
            <Form.Label className="d-flex px-1 fs-5">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Button type="submit">Log In</Button>
        </Form>

        <p>
          Don't have an account? <a href="/register"> Sign up now!</a>
        </p>
      </Container>
    </SideNavbar>
  );
};

export default LoginPage;
