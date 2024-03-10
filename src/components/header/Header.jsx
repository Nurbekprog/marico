import React, { useState } from "react";
import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import menuBtn from "../../assets/images/menu-btn.svg";
import close from "../../assets/images/close.svg";
const Header = () => {
  const [isToggle, setToggle] = useState(false);
  const toggle = () => {
    setToggle(!isToggle);
    console.log(`${isToggle} `);
  };
  return (
    <div className="">
      <div className="container nav">
        <div className="nav-logo">
          <a href="#">
            <img src={logo} alt="" />
            <h1>Marico</h1>
          </a>
        </div>
        <div className="nav-list">
          <select className="dropdown" name="" id="">
            <option value="">Use Cases</option>
            <option value="example">Example</option>
            <option value="example">Example</option>
          </select>
          <a href="">About</a>
          <a href="">Pricing</a>
          <a href="">Blog</a>
        </div>
        <div className="nav-btns">
          <button className="nav-btns-1">Login</button>
          <button className="nav-btns-2">Sign Up</button>
          <button className="nav-btns-3" onClick={toggle}>
            {isToggle ? <img src={close} /> : <img src={menuBtn} />}
            {isToggle ? (
              <div className="menubar">
                <select className="dropdown" name="" id="">
                  <option value="">Use Cases</option>
                  <option value="example">Example</option>
                  <option value="example">Example</option>
                </select>
                <a href="">About</a>
                <a href="">Pricing</a>
                <a href="">Blog</a>
                <button className="">Login</button>
                <button className="">Sign Up</button>
              </div>
            ) : (
              <div className="menu-none">
                <select className="dropdown" name="" id="">
                  <option value="">Use Cases</option>
                  <option value="example">Example</option>
                  <option value="example">Example</option>
                </select>
                <a href="">About</a>
                <a href="">Pricing</a>
                <a href="">Blog</a>
              </div>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
