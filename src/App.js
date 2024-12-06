import React from "react";
import HeaderTitle from "./components/HeaderTitle";
import "./App.css";
import CalculatorContainer from "./components/CalculatorContainer";

function App() {
  return (
    <div className="App">
      <HeaderTitle />
      <div className="main-container">
        <CalculatorContainer />
      </div>
    </div>
  );
}

export default App;
