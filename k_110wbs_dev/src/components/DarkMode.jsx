import React from "react";
import "./DarkMode.scss";

const DarkMode = () => {
  return (
    <>
      <label className="switch__label">
        <input type="checkbox" class="switch__input" />
        <span className="switch__content"></span>
        <span className="switch__circle"></span>
      </label>
    </>
  );
}

export default DarkMode;


