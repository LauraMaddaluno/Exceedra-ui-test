import React from "react";
import background from "../img/background.jpg";

const Home = () => {
  return (
    <div
      id="background-img"
      style={{ backgroundImage: `url(${background})` }}
    ></div>
  );
};

export default Home;
