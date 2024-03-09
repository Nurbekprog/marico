import React from "react";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home container">
      <div className="home-top">
        <h1>Own your audience.</h1>
        <p>So you don't lose them.</p>
      </div>
      <div className="home-middle">
        <p className="home-middle-p1">
          Turn your audience into email and text message subscribers.
        </p>
        <div className="home-middle-btns">
          <button className="home-middle-btns-1">Get Started Now</button>
          <button className="home-middle-btns-2">View A Demo</button>
        </div>
        <span>
          <div></div>
          <h5>1000+</h5>
          <p>creators have already started</p>
        </span>
      </div>
      <div className="home-footer"></div>
    </div>
  );
};

export default Home;
