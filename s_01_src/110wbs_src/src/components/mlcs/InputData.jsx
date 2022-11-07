import React from "react";
import "./InputData.scss";
import ApiFetch from "../hooks/ApiFetch.jsx"
import "./InputData.scss"

const InputData = () => {
  return (
    <div className="InputData">
      <ApiFetch />
      <input src="../Lv1_atms/react2.svg" />
    </div>
  );
};

export default InputData;
