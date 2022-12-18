import React from "react";
import { Link } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const outline = css`
  z-index: 6;
  background-color: white;
  width: 182px;
  height: 223px;
  margin: 5px;
`;

const inline = css`
  width: 165px;
  height: 165px;
  margin: 7px 7px 0px 7px;
`;

// const Card = () => {
class Card extends React.Component {
  render() {
    return (
      <div className="inline-block drop-shadow-[0_0px_13px_rgba(0,0,0,0.3)] shadow-lg text-center rounded-2xl text-base leading-normal" css={outline}>
        <div className="rounded">
          {/* <Link to="/Coordinate"> */}
          <Link to={this.props.link}>
            <img src={this.props.image} alt={this.props.introduction} className="rounded-2xl cursor-pointer"  css={inline} />
          </Link>
        </div>
        <p>{this.props.name}</p>
        <p><b>{this.props.location}</b>、日本、{this.props.distance}km</p>
      </div>
    );
  }
}

export default Card;

