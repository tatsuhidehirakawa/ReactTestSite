import React from "react"
import "./Offer.scss"
import Rating from '@mui/material/Rating';
// import MyMap from './Map';
import 'leaflet/dist/leaflet.css';
import { Mapper } from "../atms/Mapper";
import { Link } from "react-router-dom";

// import Avater from '@mui/material/Avater';

// import ApiFetch from '../../hooks/ApiFestch.jsx';

const Offer = () => {
  return (
    <div className="Offer--outline">

      <div className="Offer--inlineA">
      {/* <p className="Offer__textA">- <b>Offer</b> -</p> */}
      <div className="Offer--inlineA--boxA__pictureA">
      {/* <img src={this.props.image} alt={this.props.introduction}/> */}
      </div>
      <div className="Offer--inlineA--boxB__textA">
        <p className="sss">
          It is a full-stack package for web development, 
          focusing on the technology stack presented in the next block. 
          It is optimized primarily as a template for creating large-scale CtoC sites. 
          In particular, it is RESTful,
          does not use CSS-in-JS, minimizes Paas dependencies, 
          emphasizes orthogonality and loose coupling, static typing, 
          and Docker usage.
          <Rating />
          {/* <Avater
            alt="sss"
            src="http://www.fff.kkk/src.svg"
            sx={{ width: 24, hight: 24 }}
          /> */}
        </p>
      </div>
      </div>

      <div className="Offer--inlineB">
        <div className="Offer--inlineB--boxA__pictureA">
          <p>
            Technology stack:<br />
            Frontend: React.js, TypeScript, Sass<br />
            Backend: Golang(Gin,sqlc), PostgreSQL<br />
            <b>Dev</b>lopment environment: Docker<br />
            <b>T</b>e<b>st</b> Environment: CircleCI, Docker(Multistage Build)<br />
            <b>St</b>a<b>g</b>ing Environment: Terraform
          </p>
        </div>
        <div className="Offer--inlineB--boxB__textA">
          <div className="Offer__textS"></div>
          <div className="Offer__textS"></div>
          <div className="Offer__textS"></div>
          <div className="Offer__textS"></div>
          <div className="Offer__textS"></div>
          <div className="Offer__textS"></div>
          <div className="Offer__textS"></div>
        </div>
      </div>
      <div className="Offer--inlineC__pictureA">
        <Link to="/Coordinate" className=""><Mapper /></Link>
      </div>
    </div>
  )
}

export default Offer;