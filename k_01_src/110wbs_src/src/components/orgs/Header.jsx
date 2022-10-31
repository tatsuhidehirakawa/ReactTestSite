/* -+----+----+----+----+----+----+----+----+----+----+

    ヘッダーコンポーネント(Header.jsx)の実装
      2022.7.25 実装開始
      2022.7.31 nabe11234さんからのご指導により修正
      2022.8.2 クラスコンポーネントから関数コンポーネントに換装

      note
      コンポーネントは大文字開始
      Reactはstateの値が変わったらレンダリングされるのが大きな特徴
      現在は関数コンポーネントが主流（クラスコンポーネントは古い）
      三項演算子を学習すること。

----+----+----+----+----+----+----+----+----+----+-- */
import React from "react";
// import Logo from "./Logo";
// import UserGuide from "./UserGuide";
// import SearchBox from "./SearchBox";
// import SignUp from "./SignUp";
// import SignIn from "./SignIn";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      {/* <Logo /> */}
      <div className="headerLeft">
        <ul>
          <li>サービス</li>
        </ul>
      </div>
      {/* <UserGuide />
      <SearchBox />
      <SignIn />
      <SignUp /> */}
      <div className="headerRight">
        <ul>
          <li>お知らせ</li>
          <li>マイページ</li>
          <li>ようこそゲストさん！</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
