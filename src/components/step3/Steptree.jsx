import React from "react";
import "./Stepthree.scss";
import stepThree from "../../assets/images/step-three.png";
const Stepthree = () => {
  return (
    <div className="step3 container">
      <div className="step3-head">
        <h6>STEP 3</h6>
        <h2>Send Emails & Text Messages</h2>
        <p>
          No more going through a social platform. Reach and engage your
          audience directly over email and text massage.
        </p>
      </div>
      <div className="step3-body">
        <div className="step3-body-text">
          <h5>Create & Share</h5>
          <div>
            <h2 className="h21">Reach Your</h2>
            <h2>
              Audience<p className="h2">Directly.</p>
            </h2>
            <ul>
              <li>
                <p className="p1">1</p> Embed content or create something new to
                share.
              </li>
              <li>
                <p className="p2">2</p> Share content over email, text message
                or your homepage.
              </li>
            </ul>
            <div className="step3-body-text-btns">
              <button className="step3-body-text-btns-1">
                Get Started Now
              </button>
              <button className="step3-body-text-btns-2">View A Demo</button>
            </div>
          </div>
        </div>
        <img src={stepThree} alt="" />
      </div>
    </div>
  );
};

export default Stepthree;
