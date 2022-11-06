import React from "react";
import { Link } from "react-router-dom";
// import SearchBox from "./SearchBox";
// import Language from './Language.jsx';
import SignIn from './Signin.jsx';
import LogoA from '../atms/LogoA.jsx';
import "./Header.scss";

const Header = () => {
  return (
    <div className="headerOutline">
      <div className="header_SectionA">
        <LogoA />
      </div>
      <div className="header_SectionB">
        <Link to="/News" className="headerText">News</Link>
        <Link to="/Products" className="headerText">Products</Link>
        {/* <Link to="/TestPage" className="headerText">TestPage</Link> */}
        <Link to="/Pricing" className="headerText">Pricing</Link>
      </div>
      <div className="header_SectionC">
      </div>
      <div className="header_SectionD">
        {/* <Language /> */}
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
