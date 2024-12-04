import React from "react";
import "./HeaderTitle.css";
import logo from "../assets/SKYBUDGET.png";

const HeaderTitle = () => {
  return (
    <div className="header-container">
      <div className="title-logo">
        <span className="sky">SKY</span>
        <span className="budget">BUDGET</span>
        <img src={logo} alt="SkyBudget" class="overlay-image" />
      </div>
    </div>
  );
};

export default HeaderTitle;
