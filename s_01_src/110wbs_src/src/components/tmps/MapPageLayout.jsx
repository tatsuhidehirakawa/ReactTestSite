/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Header from "../orgs/Header";
import Footer from "../orgs/Footer";

const MapPageLayout = ({children}) => {

  const outline = css`
    position: relative;
    top: 69px;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    z-index: 0;
  `;

   const inline = css`
    justify-content: center;
  `;

// const MapPageLayout = ({children: [ aaa, bbb, ccc ] }) => {
  return (
    <div className="MapPageLayout__outline bg-[#fbfaf5]" css={outline}>
      <div><Header /></div>
      <div className="MapPageLayout__inline" css={inline}>{children}</div>
      <div><Footer /></div>
    </div>
  );
}

export default MapPageLayout;
