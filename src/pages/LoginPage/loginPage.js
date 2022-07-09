import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import SideNavbar from "../../components/SideNavbar/sideNavbar";
import Spinner from "react-bootstrap/Spinner";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import supabase from "../../config/supabase";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    try {
      setLoading(true);
      const { error } = await supabase.auth.signIn({ email, password });
      if (error) throw error;
      navigate("/browse");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SideNavbar activePath="/login">
      <Container className="py-4">
        <Image src="/images/gbs_logo_long.png" className="w-75 mx-auto" />
        <Form className="pt-5 pb-4" onSubmit={handleLogin}>
          <Form.Group className="mb-4" controlId="formEmail">
            <Form.Label className="d-flex px-1 fs-5">Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email..."
              required
            />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formPassword">
            <Form.Label className="d-flex px-1 fs-5">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>

          <Button type="submit" disabled={loading}>
            {loading ? <Spinner size="sm" animation="border" /> : "Log In"}
          </Button>
        </Form>

        <p>
          Don't have an account? <a href="/register"> Sign up now!</a>
        </p>
      </Container>
    </SideNavbar>
  );
};

export default LoginPage;
