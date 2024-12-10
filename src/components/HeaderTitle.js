import React from "react";
import "./HeaderTitle.css";
import titleLogo from "../assets/skybudgetTitle.svg";

const HeaderTitle = () => {
  return (
    <div className="header-container">
      <img src={titleLogo} alt="SkyBudget" />
    </div>
  );
};

export default HeaderTitle;
