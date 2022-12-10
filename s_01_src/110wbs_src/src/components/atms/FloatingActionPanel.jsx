// Floating Action Button Component
import React from "react"
// import { Link } from "react-router-dom";
import "./FloatingActionPanel.scss"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { fasharp } from "@fortawesome/free-solid-svg-icons";

const FloatingActionPanel = () => {
  return (
    <div className="FloatingActionPanel--outline">
      <input type="text" placeholder="小倉南区" className="FloatingActionPanel--inlineA--location"/>
      <input type="text" placeholder="修繕" className="FloatingActionPanel--inlineB--category"/>
      <input type="text" placeholder="現状回復工事" className="FloatingActionPanel--inlineC--subcategory"/>
      <select name="priority" placeholder="Priority" className="FloatingActionPanel--inlineD--priority">
        <option>選択肢のサンプル1</option>
        <option>選択肢のサンプル2</option>
        <option>選択肢のサンプル3</option>
      </select>
      <button className="FloatingActionPanel--inlineE--search">Search</button>
      {/* <div className="FloatingActionPanel--inlineA">
        <input type="text" placeholder="category" className="FloatingActionPanel--input__category"/>
      </div>

      <Link to="/ProviderList" className="FloatingActionPanel--inlineB">
        <FontAwesomeIcon icon={faCoffee} />
      </Link>
      <Link to="/ProviderMap" className="FloatingActionPanel--inlineC">
        <FontAwesomeIcon icon={faCoffee} />
      </Link>
      <Link to="/UserMap" className="FloatingActionPanel--inlineD">
        <FontAwesomeIcon icon={faCoffee} />
      </Link>
      {/* <Link to="/UserList" className="FloatingActionPanel--inlineE">
        <FontAwesomeIcon icon={faCoffee} />
      </Link>
      <div className="FloatingActionPanel--inlineF"></div> */}
    </div>
  )
}

export default FloatingActionPanel;
// {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-user" /> */}