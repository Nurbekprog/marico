import React from 'react'
import "./Experts.scss";
import experts from '../../assets/images/experts.png';
const Experts = () => {
  return (
    <div className="experts ">
      <h2 className="container">Experts Agree</h2>
      <img src={experts} alt="" />
    </div>
  );
}

export default Experts
