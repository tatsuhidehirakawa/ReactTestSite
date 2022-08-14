/*--+----+----+----+----+----+----+----+----+----+----+

    ロゴ・コンポーネント(Logo.jsx)の実装

    2022.7.25 Tatsu_hira
    2022.7.31 クラスコンポーネントから関数コンポーネントに変換

----+----+----+----+----+----+----+----+----+----+---*/
import React from "react";
import "./Logo.scss";

const Logo = () => {
  return (
    <div className="header-logo">
      <img src="react2.svg" />
    </div>
  );
};

export default Logo;
