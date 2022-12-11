// Floating Action Button Component
import React from "react"
// import { Link } from "react-router-dom";
import "./ModeSelectPanel.scss"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { fasharp } from "@fortawesome/free-solid-svg-icons";

const ModeSelectPanel = () => {
  return (
    <div className="ModeSelectPanel--outline">
      <input type="text" placeholder="〇〇市〇〇町〇〇１丁目" className="ModeSelectPanel--inlineA--location"/>
      <input type="text" placeholder="大カテゴリ" className="ModeSelectPanel--inlineB--category"/>
      <input type="text" placeholder="中カテゴリ" className="ModeSelectPanel--inlineC--subcategory"/>
      <select name="priority" placeholder="Priority" className="ModeSelectPanel--inlineD--priority">
        <option>選択肢のサンプル1</option>
        <option>選択肢のサンプル2</option>
        <option>選択肢のサンプル3</option>
      </select>
      <button className="ModeSelectPanel--inlineE--search">Search</button>
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