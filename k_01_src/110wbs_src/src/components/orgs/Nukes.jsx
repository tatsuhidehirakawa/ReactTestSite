import React from "react";
import logo from '../../logo.svg';
import { Link } from "react-router-dom";
import "../../App.css";

const Nukes = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Welcome to the "<code>STGprd_devpkg</code>" - Ver 0.3.0.0
      </p>
      <Link to="/Top" className="App-link">View Package Summary</Link>
    </header>
  )
}

export default Nukes;