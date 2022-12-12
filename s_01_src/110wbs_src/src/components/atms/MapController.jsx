// Floating Action Button Component
import React from "react"
import { Link } from "react-router-dom";
import "./FloatingActionButton.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { fasharp } from "@fortawesome/free-solid-svg-icons";

const MapController = () => {
  return (
    <div className="z_index_m w-[500px] h-[250px] rounded-3xl left-[80%] flex ">
      <div className="MapController--sectionA"></div>
      <Link to="/ProviderList" className="MapController--sectionB">
        <FontAwesomeIcon icon={faCoffee} />
      </Link>
      <Link to="/ProviderMap" className="MapController--sectionC">
        <FontAwesomeIcon icon={faCoffee} />
      </Link>
      <Link to="/UserMap" className="MapController--sectionD">
        <FontAwesomeIcon icon={faCoffee} />
      </Link>
      {/* <Link to="/UserList" className="FloatMapControlleringActionButton--sectionE">
        <FontAwesomeIcon icon={faCoffee} />
      </Link> */}
      <div className="MapController--sectionF"></div>
    </div>
  )
}

export default MapController;
// {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-user" /> */}