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
    <div className="header">
      {/* <Logo /> */}
      <div className="headerLeft">
      </div>
      {/* <UserGuide />
      <SearchBox />
      <SignIn />
      <SignUp /> */}
      <div className="LinkDefine">
      <Link to="/Main" className="App-link">Main</Link>
      <Link to="/Products" className="App-link">Products</Link>
      <Link to="/UserGuide" className="App-link">UserGuide</Link>
      <Link to="/Agreement" className="App-link">Agreement</Link>
      <Link to="/Pricing" className="App-link">Pricing</Link>
      {/* <Link to="/Signin" className="App-link"><Signin /></Link> */}
      </div>
      <Signin />
      <div className="headerRight">
        <ul>
          <li>お知らせ</li>
          <li>マイページ</li>
          <li>ようこそ ゲスト さん！</li>

        </ul>
      </div>
    </div>
  );
};

export default Header;
