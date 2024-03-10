import React from "react";
import "./Steptwo.scss";
import phone from "../../assets/images/phone.png";
const Steptwo = () => {
  return (
    <div className="step2 container">
      <div className="step2-head">
        <h5>STEP 2</h5>
        <h2>Share Your Homepage</h2>
        <p>
          Share your Wavium homepage link with your followers, and we'll handle
          the rest.
        </p>
      </div>
      <div className="step2-body">
        <div>
          <p>One Link</p>
          <h2>ALL You Create.</h2>
          <h3>One Link</h3>
          <img src={phone} alt="" />
        </div>
        <div>
          <p>Collect Subscribers</p>
          <h2>
            Emails. <br /> Phone #s.
          </h2>
          <h3>All Yours.</h3>
        </div>
      </div>
      <button>Get Started </button>
    </div>
  );
};

export default Steptwo;
