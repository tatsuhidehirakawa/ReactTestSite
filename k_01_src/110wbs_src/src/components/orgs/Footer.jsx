import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer_outline">
      <div className="footer-inner">
        <div className="footer-logo">
          <img src="../atms/postgresql.svg" />
        </div>
        <ul className="footer-list">
          <Link to="/Contact" className="Footer_text">Contact</Link>
          <Link to="/Recruit" className="Footer_text">Recruit</Link>
          <Link to="/Company" className="Footer_text">Company</Link>
          <Link to="/Privacy" className="Footer_text">Privacy</Link>
        </ul>
      </div>
    </div>
  );
}

export default Footer;