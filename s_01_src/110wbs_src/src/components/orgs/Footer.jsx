/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import LogoA from '../atms/LogoA.jsx';
import React from "react";

const Footer = () => {
  const EmotionTest = css`
    color: red;
  `;
    
  return (
    <>
    <div className="footer--Outline">
      <div className="footer--inlineA">
        <div className="footer--inlineA--sectionY__blank"></div>
        <div className="footer--inlineA--sectionA_logo">
          <LogoA />
        </div>
        <div className="footer--inlineA--sectionB__blank">
          <p>Company</p>
          <Link to="/Team" className="footer__Text">Team</Link>
          <Link to="/none" className="footer__Text">Histroy</Link>
          <Link to="/Contact" className="footer__Text">Contact</Link>
          <Link to="/none" className="footer__Text">Locations</Link>
        </div>
        <div className="footer--inlineA--sectionC__blank">
          <p>Features</p>
          <Link to="/none" className="footer__Text">Cool stuff</Link>
          <Link to="/none" className="footer__Text">Random feature</Link>
          <Link to="/none" className="footer__Text">Team feature</Link>
          <Link to="/none" className="footer__Text">Developer staff</Link>
          <Link to="/Recruit" className="footer__Text">Recruit</Link>
        </div>
        <div className="footer--inlineA--sectionD__text">
          <p>Resources</p>
          <Link to="/ResourceA" className="footer__Text">ResourceA</Link>
          <Link to="/ResourceB" className="footer__Text">ResourceB</Link>
          <Link to="/Company" className="footer__Text">Company</Link>
          <Link to="/ResourceC" className="footer__Text">ResourceC</Link>
        </div>
        <div className="footer--inlineA--sectionE__text">
          <p css={EmotionTest}>Legal</p>
          <Link to="/Contact" className="footer__Text">Contact</Link>
          <Link to="/Privacy" className="footer__Text">Privacy</Link>
          <Link to="/none" className="footer__Text">Temes fo use</Link>
        </div>
        <div className="footer--inlineA--sectionZ__blank"></div>
      </div>
      <div className="footer--InlineB__signeture">
        {/* oupCopyright inc.-3 2022 All Right Reser. All Right Reserved */}
        <p>2023-2022 &copy; Your website org.</p>
      </div>
    </div>
    </>
  );
}

export default Footer;