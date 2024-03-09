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
      <div className="home-footer">
        <h2>Why Creators Love Marico</h2>
        <div className="home-footer-list">
          <div>
            <h4>🙂 Reduced Anxiety</h4>
            <p>Never worry about losing your audience.</p>
          </div>
          <div>
            <h4>😃 Lower Workload</h4>
            <p>Just share one link. We'll handle the rest.</p>
          </div>
          <div>
            <h4>🥳 More Time</h4>
            <p>Spend less time on marketing tools</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
