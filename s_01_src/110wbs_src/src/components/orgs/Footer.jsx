import React from "react";
import { Link } from "react-router-dom";
import LogoA from '../atms/LogoA.jsx';
import "./Footer.scss";

const Footer = () => {
  return (
    <>
    <div className="footer--Outline">
      <div className="footer--InlineA">
        <div className="footer--InlineA--SectionA_logo">
          <LogoA />
        </div>
        <div className="footer--InlineA--SectionB__blank">
        </div>
        <div className="footer--InlineA--SectionC__blank">
        </div>
        <div className="footer--InlineA--SectionD__text">
          <Link to="/Contact" className="footer__Text">Contact</Link>
          <Link to="/Recruit" className="footer__Text">Recruit</Link>
          <Link to="/Company" className="footer__Text">Company</Link>
          <Link to="/Privacy" className="footer__Text">Privacy</Link>
        </div>
      </div>
      <div className="footer--InlineB__signeture">
        {/* oupCopyright inc.-3 2022 All Right Reser. All Right Reserved */}
        <p>2023-2022 &copy; Your Website Inc.</p>
      </div>
    </div>
    </>
  );
}

export default Footer;