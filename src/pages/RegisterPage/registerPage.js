import React, { useState } from "react";
import SideNavbar from "../../components/SideNavbar/sideNavbar";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import UploadAvatar from "../../components/UploadAvatar/uploadAvatar";

const RegisterPage = () => {
  const [avatarData, setAvatarData] = useState(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <SideNavbar activePath="/register">
      <UploadAvatar />
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
        <fieldset>
          <Form.Group as={Row} className="mb-3">
            <Form.Label
              as="legend"
              column
              sm={5}
              className="d-flex align-start my-auto"
            >
              Preferred Beneficiaries:
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

        <Button type="submit">Register</Button>
      </Form>
    </SideNavbar>
  );
};

export default RegisterPage;
