import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nationality from "./Nationality.js";
import Container from "react-bootstrap/Container";
import {
  Form,
  FormGroup,
  FormControl,
  FormLabel,
  Row,
  Col,
} from "react-bootstrap";

const FormComp = () => {
  const initialValues = { name: "", surname: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const setSelectedCountry = (country) => {
    setFormValues({ ...formValues, country: country });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log(JSON.stringify(formValues, undefined, 2));
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      navigate("/welcome");
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/i;
    if (!values.name) {
      errors.name = "Enter your name";
    }
    if (!values.surname) {
      errors.surname = "Enter your surname";
    }
    if (!values.email) {
      errors.email = "Enter your email";
    } else if (!regex.test(values.email)) {
      errors.email = "Please enter a valid format";
    }
    if (!values.password) {
      errors.password = "Enter your password";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more then 3 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password must be less then 10 characters";
    }
    return errors;
  };

  return (
    <Container className="container-md" id="form-container">
      <h1 id="title">Please create an account</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Name
          </Form.Label>
          <Col md="10">
            <Form.Control
              className="form-control placeholders"
              type="text"
              name="name"
              placeholder={formErrors.name}
              value={formValues.name}
              onChange={handleChange}
            ></Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Surname
          </Form.Label>
          <Col md="10">
            <Form.Control
              className="form-control placeholders"
              type="text"
              name="surname"
              placeholder={formErrors.surname}
              value={formValues.surname}
              onChange={handleChange}
            ></Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            Country
          </Form.Label>
          <Col md="10">
            <Nationality setSelectedCountry={setSelectedCountry} />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            email
          </Form.Label>
          <Col md="10">
            <Form.Control
              className="form-control placeholders"
              type="email"
              name="email"
              placeholder={formErrors.email}
              value={formValues.email}
              onChange={handleChange}
            ></Form.Control>
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm="2">
            password
          </Form.Label>
          <Col md="10">
            <Form.Control
              className="form-control"
              type="password"
              name="password"
              placeholder="must be 4-10 characters"
              value={formValues.password}
              onChange={handleChange}
            ></Form.Control>
          </Col>
        </Form.Group>
        <p>{formErrors.password}</p>

        <Col md="12">
          <button className="btn btn-block btn-primary" id="btn-register">
            Register
          </button>
        </Col>
      </Form>
    </Container>
  );
};

export default FormComp;
