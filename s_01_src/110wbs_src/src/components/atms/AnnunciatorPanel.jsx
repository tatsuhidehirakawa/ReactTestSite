// Floating Action Button Component
import React from "react"
// import { Link } from "react-router-dom";
import "./AnnunciatorPanel.scss"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { fasharp } from "@fortawesome/free-solid-svg-icons";

const AnnunciatorPanel = () => {
  return (
    <div className="AnnunciatorPanel--outline">
      <input type="text" placeholder="地域" className="AnnunciatorPanel--inlineA--location"/>
      <input type="text" placeholder="モード" className="AnnunciatorPanel--inlineB--category"/>
.      {/* <div className="AnnunciatorPanel--inlineA">
        <input type="text" placeholder="category" className="AnnunciatorPanel--input__category"/>
      </div>

      <Link to="/ProviderList" className="AnnunciatorPanel--inlineB">
        <FontAwesomeIcon icon={faCoffee} />
      </Link>
      <Link to="/ProviderMap" className="AnnunciatorPanel--inlineC">
        <FontAwesomeIcon icon={faCoffee} />
      </Link>
      <Link to="/UserMap" className="AnnunciatorPanel--inlineD">
        <FontAwesomeIcon icon={faCoffee} />
      </Link>
      {/* <Link to="/UserList" className="AnnunciatorPanel--inlineE">
        <FontAwesomeIcon icon={faCoffee} />
      </Link>
      <div className="AnnunciatorPanel--inlineF"></div> */}
    </div>
  )
}

export default AnnunciatorPanel;
// {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-user" /> */}