import React from "react";
import { Link } from "react-router-dom";

class Card extends React.Component {
  render() {

    return (
      <div className="bg-white inline-block drop-shadow-[0_0px_13px_rgba(0,0,0,0.3)] w-[182px] h-[223px] shadow-lg text-center rounded-2xl text-base leading-normal z-6 m-[5px]">
        <div className="rounded">
          <Link to="/Offer">
            <img src={this.props.image} alt={this.props.introduction} className="w-[165px] h-[165px] rounded-2xl cursor-pointer mt-[7px] mr-[7px] mb-[0px] ml-[7px]" />
          </Link>
        </div>
        <p>{this.props.name}</p>
        <p><b>{this.props.location}</b>、日本、{this.props.distance}km</p>
      </div>
    );
  }
}

export default Card;

