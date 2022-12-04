import React from "react";
import { Link } from "react-router-dom";
// import "./Card.scss";

class Card extends React.Component {
  render() {

    return (
      <div className="inline-block w-64 h-72 text-center rounded-2xl text-base leading-normal	m-2">
        <div className="card--inline rounded">
          <Link to="/Offer">
            <img src={this.props.image} alt={this.props.introduction} className="w-60 h-60 rounded-2xl cursor-pointer" />
          </Link>
        </div>
        <p>{this.props.name}</p>
        <p><b>{this.props.location}</b>、日本、{this.props.distance}km</p>
      </div>
    );
  }
}

export default Card;
