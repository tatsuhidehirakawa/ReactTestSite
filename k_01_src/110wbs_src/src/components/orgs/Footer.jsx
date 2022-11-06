import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footerOutline">
      {/* Logo area */}
      <div className="footerLogo">
      </div>
      {/* Left area */}
      <div className="footerLeft">
      </div>
      {/* Left area */}
      <div className="footerCenter">
      </div>
      {/* Right area */}
      <div className="footerRight">
        <Link to="/Contact" className="footerText">Contact</Link>
        <Link to="/Recruit" className="footerText">Recruit</Link>
        <Link to="/Company" className="footerText">Company</Link>
        <Link to="/Privacy" className="footerText">Privacy</Link>
      </div>
      <div className="Signature">
        <p>since 20xx-2023@Sample team all right reserved.</p>
      </div>
    </div>
  );
}

export default Footer;