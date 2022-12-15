/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import LogoA from '../atms/LogoA.jsx';
import React from "react";
// import "../../Pager.scss";

const Footer = () => {

  const outline = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 237px;
    // padding: 0% 17% 0% 6%;
    position: absolute;
    bottom: 0;
    z-index: 9;
    // @include frostedglass;
  `;

  const inlineA = css`
    display: flex;
    height: 173px;
    justify-content: space-evenly;
  `;

  const inlineB = css`
    bottom: 0;
    margin: 0px;
    height: 35px;
    color: #e9e4d4;
    p {
      margin-top: 30px;
    }
  `;

  const logoBox = css`
    margin: 43px 0px 0px 90px;
    float: left;
    height: 100px;
    width: 10%;
    .logoInline {
      height: 90px;
    }
  `;

  const SectionBox = css`
    width: 9%;
    height: 10px;
    display: flex;
    flex-direction: column;
    line-height: 1.4;
    text-align: center;
    margin: 36px 88px 0px 0px;
  `;

  const footerSubtitle = css`
    color: #fffffc;
    text-decoration: none;
    text-shadow: 1px 2px 3px #808080;
  `;

  const footerMaintitle = css`
    color: #e9e4d4;
    text-decoration: none;
    text-shadow: 1px 2px 3px #808080;
    font-weight: bold;
    margin-bottom: 10px;
  `;

  return (
    <>
    <div className="footer--Outline" css={outline}>
      <div className="footer--inlineA" css={inlineA}>
        <div className="footer--inlineA--sectionA_logo" css={logoBox}>
          <LogoA />
        </div>
        <div className="footer--inlineA--sectionB__blank" css={SectionBox}>
          <p css={footerMaintitle}>Company</p>
          <Link to="/Team" css={footerSubtitle}>Team</Link>
          <Link to="/none" css={footerSubtitle}>Histroy</Link>
          <Link to="/Contact" css={footerSubtitle}>Contact</Link>
          <Link to="/none" css={footerSubtitle}>Locations</Link>
        </div>
        <div className="footer--inlineA--sectionC__blank" css={SectionBox}>
        <p css={footerMaintitle}>Features</p>
          <Link to="/none" css={footerSubtitle}>Cool stuff</Link>
          <Link to="/none" css={footerSubtitle}>Random feature</Link>
          <Link to="/none" css={footerSubtitle}>Team feature</Link>
          <Link to="/none" css={footerSubtitle}>Developer staff</Link>
          <Link to="/Recruit" css={footerSubtitle}>Recruit</Link>
        </div>
        <div className="footer--inlineA--sectionD__text" css={SectionBox}>
        <p css={footerMaintitle}>Resources</p>
          <Link to="/ResourceA" css={footerSubtitle}>ResourceA</Link>
          <Link to="/ResourceB" css={footerSubtitle}>ResourceB</Link>
          <Link to="/Company" css={footerSubtitle}>Company</Link>
          <Link to="/ResourceC" css={footerSubtitle}>ResourceC</Link>
        </div>
        <div className="footer--inlineA--sectionE__text" css={SectionBox}>
        <p css={footerMaintitle}>Legal</p>
          <Link to="/Contact" css={footerSubtitle}>Contact</Link>
          <Link to="/Privacy" css={footerSubtitle}>Privacy</Link>
          <Link to="/none" css={footerSubtitle}>Temes fo use</Link>
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