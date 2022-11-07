import React from "react";
import { Link } from "react-router-dom";
// import SearchBox from "./SearchBox";
// import Language from './Language.jsx';
import SignIn from './Signin.jsx';
// import SignIn from './Signin.tsx';
import LogoA from '../atms/LogoA.jsx';
import "./Header.scss";

const Header = () => {
  return (
    <div className="header--outline">
      <div className="header--sectionA__logo">
        <LogoA />
      </div>
      <div className="header--sectionB__button">
        <Link to="/News" className="header__text">News</Link>
        <Link to="/Products" className="header__text">Products</Link>
        {/* <Link to="/TestPage" className="headerText">TestPage</Link> */}
        <Link to="/Pricing" className="header__text">Pricing</Link>
      </div>
      <div className="header--sectionC__searchbox">
        <p>searchbox.jsx</p>
      </div>
      <div className="header--sectionD__button">
        {/* <Language /> */}
        <Link to="/SiteTop" className="header__text">SiteTop</Link>
        <Link to="/Agreement" className="header__text">Agreement</Link>
        <Link to="/UserGuide" className="header__text">UserGuide</Link>
        <Link to="/SignUp" className="header__text">SignUp</Link>
        <SignIn />
        {/* <Link to="/SignIn" className="header__text">SignIn</Link> */}
        <Link to="/MyPage" className="header__text">MyPage</Link>
      </div>
    </div>
  );
};

export default Header;
