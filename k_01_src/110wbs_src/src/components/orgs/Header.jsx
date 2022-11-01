import React from "react";
import { Link } from "react-router-dom";
// import Logo from "./Logo";
import UserGuide from "../tmps/UserGuide";
// import SearchBox from "./SearchBox";
// import SignUp from "./SignUp";
// import SignIn from "./SignIn";
import Signin from '../page/Signin.jsx';
import "./Header.scss";

const Header = () => {
  return (
    <div className="header_outline">
      {/* <Logo /> */}
      <div className="headerLeft">
      </div>
      {/* <UserGuide />
      <SearchBox />
      <SignIn />
      <SignUp /> */}
      <div className="LinkDefine">
        <Link to="/Main" className="App-link">Main</Link>
        <Link to="/News" className="App-link">News</Link>
        <Link to="/Products" className="App-link">Products</Link>
        <Link to="/Agreement" className="App-link">Agreement</Link>
        <Link to="/Pricing" className="App-link">Pricing</Link>
        <Link to="/UserGuide" className="App-link">UserGuide</Link>
        <Link to="/SignUp" className="App-link">SignUp</Link>
        <Link to="/SignIn" className="App-link">SignIn</Link>
        <Link to="/MyPage" className="App-link">MyPage</Link>
      </div>
      <Signin />
      <div className="headerRight">
        <ul>
          <li>ようこそ ゲスト さん！</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
