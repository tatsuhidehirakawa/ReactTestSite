/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import LogoA from '../atms/LogoA.jsx';
import React from "react";
import "../../Pager.scss";

const Footer = () => {

  const outline = css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: $footer__height;
    position: absolute;
    bottom: 0;
    z-index: 9;
    @include frostedglass;
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
    }
  `;

  const LogoBox = css`
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
    margin: 15px 21px 5px 0px;
  `;

  const footerText = css`
    color: rgb(26, 24, 24);
    text-decoration: none;
    text-shadow: 1px 2px 3px #808080;
    font-weight: bold;
  `;

  return (
    <>
    <div className="footer--Outline" css={outline}>
      <div className="footer--inlineA" css={inlineA}>
        <div className="footer--inlineA--sectionA_logo" css={LogoBox}>
          <LogoA />
        </div>
        <div className="footer--inlineA--sectionB__blank" css={SectionBox}>
          <p>Company</p>
          <Link to="/Team" css={footerText}>Team</Link>
          <Link to="/none" css={footerText}>Histroy</Link>
          <Link to="/Contact" css={footerText}>Contact</Link>
          <Link to="/none" css={footerText}>Locations</Link>
        </div>
        <div className="footer--inlineA--sectionC__blank" css={SectionBox}>
          <p>Features</p>
          <Link to="/none" css={footerText}>Cool stuff</Link>
          <Link to="/none" css={footerText}>Random feature</Link>
          <Link to="/none" css={footerText}>Team feature</Link>
          <Link to="/none" css={footerText}>Developer staff</Link>
          <Link to="/Recruit" css={footerText}>Recruit</Link>
        </div>
        <div className="footer--inlineA--sectionD__text" css={SectionBox}>
          <p>Resources</p>
          <Link to="/ResourceA" css={footerText}>ResourceA</Link>
          <Link to="/ResourceB" css={footerText}>ResourceB</Link>
          <Link to="/Company" css={footerText}>Company</Link>
          <Link to="/ResourceC" css={footerText}>ResourceC</Link>
        </div>
        <div className="footer--inlineA--sectionE__text" css={SectionBox}>
          <p>Legal</p>
          <Link to="/Contact" css={footerText}>Contact</Link>
          <Link to="/Privacy" css={footerText}>Privacy</Link>
          <Link to="/none" css={footerText}>Temes fo use</Link>
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