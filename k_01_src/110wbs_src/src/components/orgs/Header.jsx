import React from "react";
import { Link } from "react-router-dom";
// import Logo from "./Logo";
// import UserGuide from "../tmps/UserGuide";
// import SearchBox from "./SearchBox";
// import SignUp from "./SignUp";
// import SignIn from "./SignIn";
import Signin from '../page/Signin.jsx';
import "./Header.scss";

const Header = () => {
  return (
    <div className="header_outline">
      {/* Logo */}
      <div className="header_logo">
      </div>      
      {/* Left area */}
      <div className="header_left">
      </div>
      {/* Middle area */}
      <div className="header_search">
      </div>
      {/* Left area */}
      <div className="header_right">
        <Link to="/Main" className="header_text">Main</Link>
        <Link to="/News" className="header_text">News</Link>
        <Link to="/Products" className="header_text">Products</Link>
        <Link to="/Agreement" className="header_text">Agreement</Link>
        <Link to="/Pricing" className="header_text">Pricing</Link>
        <Link to="/UserGuide" className="header_text">UserGuide</Link>
        <Link to="/SignUp" className="header_text">SignUp</Link>
        <Link to="/SignIn" className="header_text">SignIn</Link>
        <Link to="/MyPage" className="header_text">MyPage</Link>
      </div>
      <Signin />
    </div>
  );
};
export default Header;
