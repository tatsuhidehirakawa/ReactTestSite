/*--+----+----+----+----+----+----+----+----+----+----+

      2022.8.1 実装開始
      2022.8.2 クラスコンポーネントから関数コンポーネントに換装

       ランディングページ・コンポーネント
       ログインしているユーザには表示させない。
       ログオフしているユーザにはこのページを表示する。

----+----+----+----+----+----+----+----+----+----+---*/
import React from "react";
import "./LandingPage.scss";

const LandingPage = () => {
  return (
    <>
      <header />
      <h2>このページはランディングページ！</h2>
      <button>enter</button>
      <div className="LandingPicture"></div>
      <h2>あいうえお</h2>
      <h2>かきくけこ</h2>
      <footer />
    </>
  );
};

export default LandingPage;
