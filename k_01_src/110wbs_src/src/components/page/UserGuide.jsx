/*--+----+----+----+----+----+----+----+----+----+----+

    ユーザーガイドコポーネント(UserGuide.jsx)の実装
    2022.8.2 クGUIのみ実装

----+----+----+----+----+----+----+----+----+----+---*/
import React from "react"
import "./UserGuide.scss"

const UserGuide = () => {
  return (
    <>
      {/* <img src="hiyoko.svg" className="icon-beginner" /> */}
      <p className="userGuide_text">ご利用ガイド</p>
    </>
  )
}

export default UserGuide;