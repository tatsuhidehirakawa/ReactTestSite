// Floating Action Button Component
import React from "react"
import { Link } from "react-router-dom";
import "./FloatingActionButton.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { fasharp } from "@fortawesome/free-solid-svg-icons";

const FloatingActionButton = () => {
  return (
    <div className="FloatingActionButton--outline">
      <div className="FloatingActionButton--sectionA"></div>
      <Link to="/ProviderList" className="FloatingActionButton--sectionB">
        <FontAwesomeIcon icon={faCoffee} />
      </Link>
      <Link to="/ProviderMap" className="FloatingActionButton--sectionC">
        <FontAwesomeIcon icon={faCoffee} />
      </Link>
      <Link to="/UserMap" className="FloatingActionButton--sectionD">
        <FontAwesomeIcon icon={faCoffee} />
      </Link>
      {/* <Link to="/UserList" className="FloatingActionButton--sectionE">
        <FontAwesomeIcon icon={faCoffee} />
      </Link> */}
      <div className="FloatingActionButton--sectionF"></div>
    </div>
  )
}

export default FloatingActionButton;
{/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-user" /> */}