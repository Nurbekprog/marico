import React from "react";
import "./Stepone.scss";
import stepOne from "../../assets/images/step-one-img.png";
const Stepone = () => {
  return (
    <div className="step1 container">
      <div className="step1-head">
        <h6>STEP 1</h6>
        <h2>Connect Your Content</h2>
        <p>
          Bring all of your content together and get a Homepage that
          automatically updates whenever you create anywhere online.
        </p>
        <button>View Avaliable Sources</button>
      </div>
      <div className="step1-body">
        <div className="step1-body-text">
          <h5>Your Homepage</h5>
          <div>
            <h2 className="h21">Your Content.</h2>
            <h2>
              All in <p className="h2">One Spot</p>
            </h2>
            <ul>
              <li>
                <p className="p1">1</p> Bring all of your content together into
                one homepage.
              </li>
              <li>
                <p className="p2">2</p> Your page automatically updates whenever
                you create.
              </li>
            </ul>
            <div className="step1-body-text-btns">
              <button className="step1-body-text-btns-1">Get Started Now</button>
              <button className="step1-body-text-btns-2">View A Demo</button>
            </div>
          </div>
        </div>
        <img src={stepOne} alt="" />
      </div>
    </div>
  );
};

export default Stepone;
