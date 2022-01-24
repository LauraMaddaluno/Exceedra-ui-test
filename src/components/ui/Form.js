import React from "react";

const Form = () => {
  return (
    <div className="container">
      <form>
        <h1>Registration form</h1>
        <div>
          <label>Name</label>
          <input type="text" name="name" placeholder="your name"></input>
        </div>
        <div>
          <label>Surname</label>
          <input type="text" name="surname" placeholder="your surname"></input>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="your email address"
          ></input>
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="your password"
          ></input>
        </div>
        <div>
          <button className="">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
