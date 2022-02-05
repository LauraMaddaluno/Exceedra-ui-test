import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Nationality from "./Nationality.js";
// import Container from "react-bootstrap/Container";
// import {
//   Form,
//   FormGroup,
//   FormControl,
//   FormLabel,
//   Row,
//   Col,
// } from "react-bootstrap";

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
    } else if (regex.test(values.email)) {
      errors.email = "A valid format contains only lowercase letters";
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
    <div>
      <div className="container">
        <h1 id="title">Please create an account</h1>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-25">
              <label htmlFor="name">Name</label>
            </div>
            <div className="col-75">
              <input
                className="input"
                type="text"
                name="name"
                placeholder={formErrors.name}
                value={formValues.name}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Surname</label>
            </div>
            <div className="col-75">
              <input
                className="form-control placeholders"
                type="text"
                name="surname"
                placeholder={formErrors.surname}
                value={formValues.surname}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Country</label>
            </div>
            <div className="col-75">
              <Nationality setSelectedCountry={setSelectedCountry} />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Email</label>
            </div>
            <div className="col-75">
              <input
                className="form-control placeholders"
                type="email"
                name="email"
                placeholder={formErrors.email}
                value={formValues.email}
                onChange={handleChange}
              ></input>
            </div>
          </div>
          <p id="error-psw">{formErrors.email}</p>
          <div className="row">
            <div className="col-25">
              <label>Password</label>
            </div>
            <div className="col-75">
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="must be 4-10 characters"
                value={formValues.password}
                onChange={handleChange}
              ></input>
            </div>
          </div>

          <p id="error-psw">{formErrors.password}</p>

          <button className="button">Register</button>
        </form>
      </div>
    </div>
  );
};

export default FormComp;
