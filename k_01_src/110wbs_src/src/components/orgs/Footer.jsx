import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footerOutline">
      {/* Logo area */}
      <div className="footerLogo">
        <img src="../atms/postgresql.svg" />
      </div>
      {/* Left area */}
      <div className="footerLeft">
      </div>
      {/* Right area */}
      <div className="footerRight">
        <Link to="/Contact" className="Footer_text">Contact</Link>
        <Link to="/Recruit" className="Footer_text">Recruit</Link>
        <Link to="/Company" className="Footer_text">Company</Link>
        <Link to="/Privacy" className="Footer_text">Privacy</Link>
      </div>
    </div>
  );
}
export default Footer;