import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Form = () => {
  const initialValues = { name: "", surname: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log(JSON.stringify(formValues, undefined, 2));
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
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
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Registration form</h1>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="your name"
            value={formValues.name}
            onChange={handleChange}
          ></input>
        </div>
        <p>{formErrors.name}</p>
        <div>
          <label>Surname</label>
          <input
            type="text"
            name="surname"
            placeholder="your surname"
            value={formValues.surname}
            onChange={handleChange}
          ></input>
        </div>
        <p>{formErrors.surname}</p>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="your email address"
            value={formValues.email}
            onChange={handleChange}
          ></input>
        </div>
        <p>{formErrors.email}</p>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="your password"
            value={formValues.password}
            onChange={handleChange}
          ></input>
        </div>
        <p>{formErrors.password}</p>
        <div>
          <button
            onClick={() => {
              if (isSubmit) {
                navigate("/welcome");
              }
            }}
            className=""
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
