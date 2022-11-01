import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <img src="../atms/postgresql.svg" />
        </div>
        <ul className="footer-list">
          <Link to="/ContactUs" className="App-link">ContactUs</Link>
          <Link to="/Recruit" className="App-link">Recruit</Link>
          <Link to="/Company" className="App-link">Company</Link>
          <Link to="/Privacy" className="App-link">Privacy</Link>
        </ul>
      </div>
    </div>
  );
}

export default Footer;