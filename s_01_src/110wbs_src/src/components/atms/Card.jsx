import React from "react";
import { Link } from "react-router-dom";

class Card extends React.Component {
  render() {

    return (
      <div className="bg-white inline-block w-[192px] h-[216px] shadow-lg p-[10px 10px 20px 10px] text-center rounded-2xl text-base leading-normal z-6 m-[5px]">
        <div className="rounded">
          <Link to="/Offer">
            <img src={this.props.image} alt={this.props.introduction} className="m-[11px 11px 0px 11px] w-[165px] h-[165px] rounded-2xl cursor-pointer p-[15px 5px 0px 15px]" />
          </Link>
        </div>
        <p>{this.props.name}</p>
        <p><b>{this.props.location}</b>、日本、{this.props.distance}km</p>
      </div>
    );
  }
}

export default Card;
