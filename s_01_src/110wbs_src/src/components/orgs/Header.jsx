/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import { Link } from "react-router-dom";
// import Language from './Language.jsx';
import LogoA from '../atms/LogoA.jsx';
import Tags from '../mlcs/SearchBox.tsx';
// import SignIn from './SignIn.jsx';
import "../../Pager.scss";

const Header = () => {

  const headerHight = '69px'

  const outline = css`
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    height: ${headerHight};
    z-index: 10;
    width: 100%;
    // box-shadow: 0 10px 25px 0 rgba(0, 0, 0, .1);
    background-color: rgba(76, 108, 179, 0.486);
    backdrop-filter:blur(8px);
    filter: drop-shadow(3px 3px 9px rgba(0,0,0,0.6));  
    // @include frostedglass;
  `;

  const sectionA = css`
    display: flex;
    margin: 0px 0px 0px 15px;
    height: 69px;
    width: 30%;
  `;

  const logo = css`
    margin: 7px 0px 0px 15px;
    height: 69px;
    width: 19%;
  `;

  const boxB = css`
    margin: 25px 0px 0px 0px;
    width: 22%;
  `;

  const text = css`
    margin: 0px 3px 3px 30px;
    color: #fffffc;
    padding: 0px 0px 10px 0px;
    text-decoration: none;
    text-shadow: 1px 2px 3px #808080;
    cursor: pointer;
  `;

  const searchbox = css`
    margin: 7px 33px 6px 33px
  `;

  const sectionC = css`
    display: flex;
    padding: 0px;
    margin: 25px 110px 0px 0px;
    width: 30%;
  `;

  return (
    <div className="header--outline" css={outline}>
      <div className="header--sectionA" css={sectionA}>
        <div className="header--sectionA--boxA__logo" css={logo}>
          <LogoA />
        </div>
        <div className="header--sectionA--boxB__button" css={boxB}>
          <Link to="/News" className="header__text" css={text}>News</Link>
          <Link to="/Products" className="header__text" css={text}>Products</Link>
          <Link to="/Pricing" className="header__text" css={text}>Pricing</Link>
        </div>
      </div>
      <div className="header--sectionB__searchbox" css={searchbox}>
        <Tags />
      </div>
      <div className="header--sectionC__button" css={sectionC}>
        {/* <Language /> */}
        <Link to="/SiteTop" className="header__text" css={text}>SiteTop</Link>
        <Link to="/Agreement" className="header__text" css={text}>Agreement</Link>
        {/* <Link to="/Agreement" className="text-9xl">Agreement</Link> */}
        <Link to="/UserGuide" className="header__text" css={text}>UserGuide</Link>
        <Link to="/SignUp" className="header__text" css={text}>SignUp</Link>
        {/* <SignIn className="header__text">kkk</SignIn> */}
        {/* <SignIn className="header__text" /> */}
        <Link to="/SignIn" className="header__text" css={text}>SignIn</Link>
        <Link to="/MyPage" className="header__text" css={text}>MyPage</Link>
      </div>
    </div>
  );
};

export default Header;
