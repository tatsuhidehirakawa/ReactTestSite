import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
    <div className="footerOutline">
      <div className="footer_flex">
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
      </div>
      {/* Signature area */}
      {/* <div className="Signature"> */}
      {/* oupCopyright inc.-3 2022 All Right Reser. All Right Reserved */}
      <p>2023-2022 &copy; Sample Inc.</p>
      {/* </div> */}
    </div>
    </>
  );
}

export default Footer;