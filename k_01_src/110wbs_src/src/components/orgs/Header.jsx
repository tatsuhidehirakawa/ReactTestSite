import React from "react";
import { Link } from "react-router-dom";
// import SearchBox from "./SearchBox";
import SignIn from './Signin.jsx';
import LogoA from '../atms/LogoA.jsx';
import "./Header.scss";

const Header = () => {
  return (
    <div className="headerOutline">
      {/* Logo */}
      <div className="headerLogo">
        <LogoA />
      </div>
      {/* Left area */}
      <div className="headerLeft">
        <Link to="/News" className="headerText">News</Link>
        <Link to="/TestPage" className="headerText">TestPage</Link>
        <Link to="/Pricing" className="headerText">Pricing</Link>
      </div>
      {/* Middle area */}
      <div className="header_search">
      </div>
      {/* Left area */}
      <div className="headerRight">
        <Link to="/SiteTop" className="headerText">SiteTop</Link>
        <Link to="/Agreement" className="headerText">Agreement</Link>
        <Link to="/UserGuide" className="headerText">UserGuide</Link>
        <Link to="/SignUp" className="headerText">SignUp</Link>
        <SignIn />
        <Link to="/MyPage" className="headerText">MyPage</Link>
      </div>
    </div>
  );
};

export default Header;
