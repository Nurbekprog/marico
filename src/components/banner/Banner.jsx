import React from "react";
import "./Banner.scss";
import bgImage from "../../assets/images/bg-image.png";
const Banner = () => {
  return (
    <div className="banner">
      <h2 style={{ backgroundImage: `url(${bgImage})` }}>
        We've helped over 1,000 creatorsre claim control of their audience.
      </h2>
    </div>
  );
};

export default Banner;
