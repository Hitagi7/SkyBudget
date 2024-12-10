import React, { useEffect, useState } from "react";
import "./CalculatorContainer.css";
import DropdownMenu from "../components/DropdownMenu";
import plane from "../assets/Airplane.svg";
import group_of_arrows from "../assets/group_of_arrows.svg";
import circledown from "../assets/CaretCircleDown.svg";
import circleup from "../assets/CaretCircleUp.svg";
import { DataPoints } from "./MenuItems";

const CalculatorContainer = () => {
  const [dropdown, setDropdown] = useState(false);
  const [provinceTitle, setProvinceTitle] = useState("Cebu");
  const [provinceDistance, setProvinceDistance] = useState(0);
  const [lagrangeOutput, setLagrangeOutput] = useState(0.0);
  const [dividedOutput, setDividedOutput] = useState(0.0);

  const updateInput = (field, value) => {
    toggleDropdown();
    switch (field) {
      case "provinceTitle":
        setProvinceTitle(value);
        break;
      case "provinceDistance":
        setProvinceDistance(value);
        break;
      default:
        console.warn(`Unknown field: ${field}`);
    }
  };

  const findRangeIndex = (distance) => {
    for (let i = 0; i < DataPoints.length - 1; i++) {
      if (
        distance >= DataPoints[i].datadistance - 1 &&
        distance <= DataPoints[i + 1].datadistance - 1
      ) {
        return i;
      }
    }
    return -1; // Return -1 if no valid range is found
  };

  useEffect(() => {
    const rangeIndex = findRangeIndex(provinceDistance);
    const DataDistance = [];
    const DataPrice = [];

    if (-1 < rangeIndex && rangeIndex < 2) {
      for (let i = 0; i < rangeIndex + 3; i++) {
        DataDistance.push(DataPoints[i].datadistance);
        DataPrice.push(DataPoints[i].dataprice);
      }
    } else if (rangeIndex === -1) {
      for (let i = DataPoints.length - 4; i < DataPoints.length; i++) {
        DataDistance.push(DataPoints[i].datadistance);
        DataPrice.push(DataPoints[i].dataprice);
      }
    } else {
      for (let i = rangeIndex - 2; i < rangeIndex + 2; i++) {
        DataDistance.push(DataPoints[i].datadistance);
        DataPrice.push(DataPoints[i].dataprice);
      }
    }
    // Sets output for lagrange
    setLagrangeOutput(
      lagrangepolate(provinceDistance, DataDistance, DataPrice)
    );
    // Sets output for divided difference
    setDividedOutput(DDpolate(provinceDistance, DataDistance, DataPrice));
  }, [provinceDistance]);

  const toggleDropdown = () => setDropdown(!dropdown);

  return (
    <div className="outside-rectangle">
      <div className="output-box">
        <img src={plane} alt="airplane" />
        <div className="divided-method">
          <span className="output-title">Divided Difference Method</span>
          <span className="output">₱ {dividedOutput.toFixed(2)}</span>
          {/* Display output for divided difference */}
        </div>
        <div className="lagrange-method">
          <span className="output-title">Lagrange Method</span>
          <span className="output">₱ {lagrangeOutput.toFixed(2)}</span>{" "}
          {/* Display output for lagrange */}
        </div>
      </div>
      <div className="defaultbox">
        <span className="cebu">Cebu</span>
      </div>
      <img src={group_of_arrows} alt="" />
      <div className="input-with-button">
        <input className="input-box" value={provinceTitle} readOnly />
        <div className="right-button" onClick={toggleDropdown}>
          <img
            src={dropdown ? circledown : circleup}
            alt={dropdown ? circledown : circleup}
            className="circle"
          />
        </div>
        {dropdown && <DropdownMenu updateInput={updateInput} />}
      </div>
    </div>
  );
};

export default CalculatorContainer;

// Function to compute lagrange
function lagrangepolate(value, x, y) {
  let result = 0;
  const n = x.length;

  for (let i = 0; i < n; i++) {
    let term = y[i];
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        const denominator = x[i] - x[j];
        if (denominator === 0) return 0; // To avoid division by zero
        term *= (value - x[j]) / denominator;
      }
    }
    result += term; // Accumulate the term into the result
  }

  return result; // Return the final computed result
}

// Function to compute divided differences
function divDiff(x, y) {
  const n = x.length;
  const table = Array.from({ length: n }, () => Array(n).fill(0));

  // Fill the first column with y values
  for (let i = 0; i < n; i++) {
    table[i][0] = y[i];
  }

  // Compute divided differences
  for (let j = 1; j < n; j++) {
    for (let i = 0; i < n - j; i++) {
      table[i][j] = (table[i + 1][j - 1] - table[i][j - 1]) / (x[i + j] - x[i]);
    }
  }

  return table[0];
}

// Function to compute the product term for interpolation
function proterm(value, x, order) {
  let product = 1;
  for (let i = 0; i < order; i++) {
    product *= value - x[i];
  }
  return product;
}

// Function to compute the cubic interpolation
function DDpolate(value, x, y) {
  const divDiffValues = divDiff(x, y);
  let result = divDiffValues[0];

  // Compute the sum using the formula
  for (let i = 1; i < x.length; i++) {
    result += divDiffValues[i] * proterm(value, x, i);
  }

  return result;
}
