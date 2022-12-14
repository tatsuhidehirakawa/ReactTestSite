// Floating Action Button Component
import React from "react"
// import { Link } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
// import { fasharp } from "@fortawesome/free-solid-svg-icons";

const AnnunciatorPanel = () => {

  const outline = css`
    display: flex;
    flex-direction: column;
    border-radius: 15px;
    filter: drop-shadow(0 0px 13px rgba(0, 0, 0, .5));
    font-size: small;
    height: 90px;
    width: 280px;
    position: fixed;
    bottom: 4%;
    right: 70px;
    background-color: rgb(255, 255, 255);
    z-index: 8;
  `;

  const inline = css`
    margin: 6px 6px 6px 6px;
    padding: 6px 6px 6px 12px;
    width: 268px;
    border-radius: 10px;
    text-align: left;
    border-color: aqua;
  `;

  return (
    <div className="AnnunciatorPanel--outline" css={outline}>
      <input type="text" placeholder="地域" className="AnnunciatorPanel--inlineA--location" css={inline}/>
      <input type="text" placeholder="モード" className="AnnunciatorPanel--inlineB--category" css={inline}/>
    </div>
  )
}

export default AnnunciatorPanel;
// {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-user" /> */}