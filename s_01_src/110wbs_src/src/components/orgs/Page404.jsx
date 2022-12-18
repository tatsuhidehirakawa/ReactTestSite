/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react"
// import '../../../public/Assets/Page404.svg';
// import "./Page404.scss"

const outline = css`
  height: 701px;
  width: 963px;
  margin: 0px auto;
`;

const inlineA = css`
  height: 800px;
  width: 900px;
  margin: -116px auto 0px auto;
  padding: 50px;
  opacity: 0.5;
`;

const textA = css`
  padding-top: 254px;
  font-size: 40px;
  font-weight: bold;
  color: rgb(25, 66, 248);
  opacity: 0.6;
`;

const Page404 = () => {

  return (
    <div className="page404--outline" css={outline}>
      <div className="page404--inlineA" css={inlineA}>
        {/* <img src={page404} className="page404" /> */}
        <b><p className="page404__textA" css={textA}>404 page not found ...</p></b>
      </div>
    </div>
  )
}

export default Page404;