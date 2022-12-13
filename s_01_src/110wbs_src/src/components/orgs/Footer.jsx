/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import LogoA from '../atms/LogoA.jsx';
import React from "react";
import "../../Pager.scss";
// import "./Footer.scss";

const Footer = () => {

  const outline = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: $footer__height;
    position: absolute;
    bottom: 0;
    z-index: 9;
    // @include frostedglass;
  `;

  const inlineA = css`
    display: flex;
    height: 173px;
    justify-content: space-between;
  `;

  const inlineB = css`
    bottom: 0;
    margin: 0px;
    height: 35px;
    p {
      margin-top: 30px;
      @include footer__Text;
    }
  `;

  const inlneA = css`
    display: flex;
    height: 173px;
    justify-content: space-between;
  `;

  const footer__Text = css`
    color: rgb(26, 24, 24);
    text-decoration: none;
    text-shadow: 1px 2px 3px #808080;
    cursor: pointer;
  `;

  return (
    <>
    <div className="footer--Outline" css={outline}>
      <div className="footer--inlineA" css={inlineA}>
        <div className="footer--inlineA--sectionA_logo" css={sectionA}>
          <LogoA />
        </div>
        <div className="footer--inlineA--sectionB__blank" css={sectionB}>
          <p>Company</p>
          <Link to="/Team" className="footer__Text" css={footer__Text}>Team</Link>
          <Link to="/none" className="footer__Text" css={footer__Text}>Histroy</Link>
          <Link to="/Contact" className="footer__Text" css={footer__Text}>Contact</Link>
          <Link to="/none" className="footer__Text" css={footer__Text}>Locations</Link>
        </div>
        <div className="footer--inlineA--sectionC__blank" css={sectionC}>
          <p>Features</p>
          <Link to="/none" className="footer__Text" css={footer__Text}>Cool stuff</Link>
          <Link to="/none" className="footer__Text" css={footer__Text}>Random feature</Link>
          <Link to="/none" className="footer__Text" css={footer__Text}>Team feature</Link>
          <Link to="/none" className="footer__Text" css={footer__Text}>Developer staff</Link>
          <Link to="/Recruit" className="footer__Text" css={footer__Text}>Recruit</Link>
        </div>
        <div className="footer--inlineA--sectionD__text" css={sectionD}>
          <p>Resources</p>
          <Link to="/ResourceA" className="footer__Text" css={footer__Text}>ResourceA</Link>
          <Link to="/ResourceB" className="footer__Text" css={footer__Text}>ResourceB</Link>
          <Link to="/Company" className="footer__Text" css={footer__Text}>Company</Link>
          <Link to="/ResourceC" className="footer__Text" css={footer__Text}>ResourceC</Link>
        </div>
        <div className="footer--inlineA--sectionE__text" css={sectionE}>
          <p>Legal</p>
          <Link to="/Contact" className="footer__Text" css={footer__Text}>Contact</Link>
          <Link to="/Privacy" className="footer__Text" css={footer__Text}>Privacy</Link>
          <Link to="/none" className="footer__Text" css={footer__Text}>Temes fo use</Link>
        </div>
      </div>
      <div className="footer--InlineB__signeture" css={inlineB}>
        {/* oupCopyright inc.-3 2022 All Right Reser. All Right Reserved */}
        <p>2023-2022 &copy; Your website org.</p>
      </div>
    </div>
    </>
  );
}

export default Footer;