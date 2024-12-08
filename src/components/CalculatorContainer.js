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
      <div className="input-with-button">
       <input className="input-box" /> 
       <div className="right-button">
        <img src= {circledown} alt = "circledown" className="circledown"/>
       </div>
      </div>
    </div>
  );
};


export default CalculatorContainer;