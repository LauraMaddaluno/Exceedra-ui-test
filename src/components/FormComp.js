import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nationality from "./Nationality.js";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/button";

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
    <Container>
      <h1>Please create an account</h1>

      <section className="form">
        <form onSubmit={handleSubmit}>
          <div>
            <lable>Name</lable>
            <input
              className="form-control"
              type="text"
              name="name"
              placeholder={formErrors.name}
              value={formValues.name}
              onChange={handleChange}
            ></input>
          </div>

          <div>
            <label>Surname</label>
            <input
              className="form-control"
              type="text"
              name="surname"
              placeholder={formErrors.surname}
              value={formValues.surname}
              onChange={handleChange}
            ></input>
          </div>

          <div>
            <label>Nationality *optional</label>
            <Nationality setSelectedCountry={setSelectedCountry} />
          </div>

          <br></br>

          <div>
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              placeholder={formErrors.email}
              value={formValues.email}
              onChange={handleChange}
            ></input>
          </div>

          <div>
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              name="password"
              placeholder="must be 4-10 characters"
              value={formValues.password}
              onChange={handleChange}
            ></input>
          </div>
          <p>{formErrors.password}</p>

          <div>
            <Button className="btn btn-block">Register</Button>
          </div>
        </form>
      </section>
    </Container>
  );
};

export default FormComp;
