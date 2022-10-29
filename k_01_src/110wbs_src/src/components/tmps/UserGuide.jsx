/*--+----+----+----+----+----+----+----+----+----+----+

    ユーザーガイドコポーネント(UserGuide.jsx)の実装
    2022.8.2 クGUIのみ実装

----+----+----+----+----+----+----+----+----+----+---*/
import React from "react"
import "./UserGuide.scss"

const UserGuide = () => {
  return (
    <div className="bbb">
      {/* <img src="hiyoko.svg" className="icon-beginner" /> */}
      <p className="userGuide_text_a">- User Guide -</p>
      <div className="templete_text"></div>
      <div className="templete_text"></div>
      <div className="templete_text"></div>
      <div className="templete_text"></div>
      <div className="templete_text"></div>
      <div className="templete_text"></div>
      <div className="templete_text"></div>
    </div>
  )
}

export default UserGuide;