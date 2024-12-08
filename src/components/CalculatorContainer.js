import React, { useState } from "react";
import "./CalculatorContainer.css";
import DropdownMenu from "../components/DropdownMenu";
import plane from "../assets/Airplane.svg";
import group_of_arrows from "../assets/group_of_arrows.svg";
import circledown from "../assets/CaretCircleDown.svg";

const CalculatorContainer = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => setDropdown(!dropdown);

  return (
    <div className="outside-rectangle">
      <div className="output-box">
        <div className="plane-wrapper">
          <img src={plane} alt="airplane" />
        </div>
        <span className="output">₱ 2000.00</span>
      </div>
      <div className="defaultbox">
        <span className="cebu">Cebu</span>
      </div>
      <img src={group_of_arrows} alt="" />
      <div className="input-with-button">
        <input className="input-box" />
        <div className="right-button" onClick={toggleDropdown}>
          <img src={circledown} alt="circledown" className="circledown" />
        </div>
      </div>

      {/* Render the DropdownMenu when dropdown state is true */}
      {dropdown && <DropdownMenu />}
    </div>
  );
};

export default CalculatorContainer;
