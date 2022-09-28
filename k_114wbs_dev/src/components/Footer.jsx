/*--+----+----+----+----+----+----+----+----+----+----+

    フッターコンポーネント(Footer.jsx)の実装

    2022.7.25 Tatsu_hira
    2022.7.31 クラスコンポーネントから関数コンポーネントに変換

----+----+----+----+----+----+----+----+----+----+---*/
import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-inner">
        <div className="footer-logo">
          <img src="#" />
          <p>Footerですよ！</p>
        </div>
        <ul className="footer-list">
          <li>会社概要</li>
          <li>採用</li>
          <li>お問い合わせ</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;