import React from "react"
// import { Link } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { fasharp } from "@fortawesome/free-solid-svg-icons";

const outline = css`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  filter: drop-shadow(0 0px 13px rgba(0, 0, 0, .5));
  font-size: small;
  height: 247px;
  width: 280px;
  position: fixed;
  top: 10%;
  right: 57px;
  background-color: rgb(255, 255, 255);
  z-index: 7;
`;

const inline = css`
  margin: 6px 6px 6px 6px;
  padding: 6px 6px 6px 12px;
  width: 268px;
  border-radius: 10px;
  text-align: left;
  border-color: aqua;
`;

const inlineD = css`
  font-size: small;
  width: 28%;
  padding-top: 15px;
`;

const inlineE = css`
width: 11%;
`;

const ModeSelectPanel = () => {

  return (
    <div className="ModeSelectPanel--outline" css={outline}>
      <input type="text" placeholder="〇〇市〇〇町〇〇１丁目" className="ModeSelectPanel--inlineA--location" css={inline}/>
      <input type="text" placeholder="大カテゴリ" className="ModeSelectPanel--inlineB--category" css={inline}/>
      <input type="text" placeholder="中カテゴリ" className="ModeSelectPanel--inlineC--subcategory" css={inline}/>
      <select name="priority" placeholder="Priority" className="ModeSelectPanel--inlineD--priority" css={inlineD}>
        <option>選択肢のサンプル1</option>
        <option>選択肢のサンプル2</option>
        <option>選択肢のサンプル3</option>
      </select>
      <button className="ModeSelectPanel--inlineE--search" css={inlineE}>Search</button>
      {/* <div className="ModeSelectPanel--inlineA">
        <input type="text" placeholder="category" className="ModeSelectPanel--input__category"/>
      </div>

      <Link to="/ProviderList" className="ModeSelectPanel--inlineB">
        <FontAwesomeIcon icon={faCoffee} />
      </Link>
      <Link to="/ProviderMap" className="ModeSelectPanel--inlineC">
        <FontAwesomeIcon icon={faCoffee} />
      </Link>
      <Link to="/UserMap" className="ModeSelectPanel--inlineD">
        <FontAwesomeIcon icon={faCoffee} />
      </Link>
      {/* <Link to="/UserList" className="ModeSelectPanel--inlineE">
        <FontAwesomeIcon icon={faCoffee} />
      </Link>
      <div className="ModeSelectPanel--inlineF"></div> */}
    </div>
  )
}

export default ModeSelectPanel;
// {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-user" /> */}