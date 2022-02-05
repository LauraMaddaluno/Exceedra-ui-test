import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";

const Login = () => {
  const [isSubmit, setIsSubmit] = useState(false);
  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setLoginValue({ ...loginValue, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    console.log(setIsSubmit);
    console.log(loginValue);
  };

  useEffect(() => {
    if (isSubmit) {
      navigate("/welcome");
    }
  });

  return (
    <div style={{ paddingTop: "50px" }}>
      <form onSubmit={onSubmit}>
        <div className="user-icon">
          <AiOutlineUser size={50} />
        </div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder=""
          value={loginValue.email}
          onChange={onChange}
          required
        ></input>
        <div id="pass">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder=""
            value={loginValue.password}
            onChange={onChange}
            required
          ></input>
        </div>
        <div id="pass">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
