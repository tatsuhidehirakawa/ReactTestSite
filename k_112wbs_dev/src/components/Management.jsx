/*--+----+----+----+----+----+----+----+----+----+----+

      2022.8.1 実装開始
      2022.8.2 クラスコンポーネントから関数コンポーネントに換装

       管理コンポーネント
       サービス提供側の管理者としてログインしているユーザにだけ表示。

----+----+----+----+----+----+----+----+----+----+---*/
import React from "react";
import "./Management.scss";

const Management = () => {
  return (
    <>
      <header />
      <></>
        <h1>管理画面</h1>
        <h2>色管理、〇〇管理、〇〇管理等を行うための画面</h2>
      <></>
      <footer />
    </>
  );
}

export default Management;