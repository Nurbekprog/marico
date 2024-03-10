import React from "react";
import "./Footer.scss";
import footerLogo from "../../assets/images/footer-logo.png";
import footerEndLogo from "../../assets/images/logo.svg";
const Footer = () => {
  return (
    <div className="container footer">
      <div className="footer-main">
        <img src={footerLogo} alt="" />
        <h2>Get Started Now</h2>
        <p>Setup is easy and takes under 5 minutes.</p>
        <button>Get Started Now</button>
        <span>
          <div></div>
          <h5>1000+</h5>
          <h6>creators have already started</h6>
        </span>
      </div>
      <div className="footer-end">
        <div className="footer-end-logo">
          <div>
            <img src={footerEndLogo} alt="" />
            <h4>Marico</h4>
          </div>

          <p>info@marico.co</p>
        </div>
        <ul>
          <a href="">About</a>
          <a href="">Pricing</a>
          <a href="">Blog</a>
          <a href="">Sign in</a>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
