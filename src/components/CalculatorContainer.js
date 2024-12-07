import React from "react";
import "./CalculatorContainer.css";
import plane from "../assets/Airplane.svg";
import group_of_arrows from "../assets/group_of_arrows.svg";
import circledown from "../assets/CaretCircleDown.svg";

const CalculatorContainer = () => {
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
      <input className="input-box" />
    </div>
  );
};

export default CalculatorContainer;
