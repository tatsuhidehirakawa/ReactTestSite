import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer_outline">
      {/* Logo area */}
      <div className="footer_logo">
        <img src="../atms/postgresql.svg" />
      </div>
      {/* Left area */}
      <div className="footer_left">
      </div>
      {/* Right area */}
      <div className="footer_right">
          <Link to="/Contact" className="Footer_text">Contact</Link>
          <Link to="/Recruit" className="Footer_text">Recruit</Link>
          <Link to="/Company" className="Footer_text">Company</Link>
          <Link to="/Privacy" className="Footer_text">Privacy</Link>
      </div>
    </div>
  );
}
export default Footer;