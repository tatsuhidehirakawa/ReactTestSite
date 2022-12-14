import React from "react"
import { Link } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Pic = () => {

  const outline = css`
    border-radius: 1rem;
    width: 165px;
    height: 165px;
  `;

  return (
    <Link to={this.props.link}>
      <img
        src={this.props.image}
        alt={this.props.introduction}
        css={outline}
      />
    </Link>
  );
}

export default Pic;
