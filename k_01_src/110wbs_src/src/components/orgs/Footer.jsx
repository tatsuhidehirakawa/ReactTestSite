import React from "react";
import { Link } from "react-router-dom";
import LogoA from '../atms/LogoA.jsx';
import "./Footer.scss";

const Footer = () => {
  return (
    <>
    <div className="footerOutline">
      <div className="footerInlineA">
        <div className="footerInlineA_SectionA">
          <LogoA />
        </div>
        <div className="footerInlineA_SectionB">
        </div>
        <div className="footerInlineA_SectionC">
        </div>
        <div className="footerInlineA_SectionD">
          <Link to="/Contact" className="footerText">Contact</Link>
          <Link to="/Recruit" className="footerText">Recruit</Link>
          <Link to="/Company" className="footerText">Company</Link>
          <Link to="/Privacy" className="footerText">Privacy</Link>
        </div>
      </div>
      <div className="footerInlineB">
        {/* oupCopyright inc.-3 2022 All Right Reser. All Right Reserved */}
        <p>2023-2022 &copy; Sample Inc.</p>
      </div>
    </div>
    </>
  );
}

export default Footer;