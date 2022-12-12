/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react"

const Recruit = () => {

  const recruit__outline = css`
    height: 701px;
    width: 963px;
    margin: 0px auto;
`;

  const recruit__inlineA = css`
    height: 800px;
    width: 900px;
    margin: -116px auto 0px auto;
    padding: 50px;
    opacity: 0.5;
  `;

  const recruit__textA = css`
    color: rgb(0, 0, 0);
    padding: 0px 0px 0px 0px;
    margin: 35px 3px 35px 0px;
    cursor: pointer;
  `;

  const recruit__textS = css`
    height: auto;
    width: auto;
    margin: 10px 30px 10px 30px;
    padding: 10px 10px 10px 10px;
    background-color: rgb(81, 81, 81);
    border-radius: 30px;
  `;

  return (
    <div className="recruit--outline" css={recruit__outline}>
      <div className="recruit--inlineA" css={recruit__inlineA}>
        <p className="recruit__textA" css={recruit__textA}>- <b>Recruit</b>(Sample) -</p>
        <div className="recruit__textS" css={recruit__textS}></div>
        <div className="recruit__textS" css={recruit__textS}></div>
        <div className="recruit__textS" css={recruit__textS}></div>
        <div className="recruit__textS" css={recruit__textS}></div>
        <div className="recruit__textS" css={recruit__textS}></div>
        <div className="recruit__textS" css={recruit__textS}></div>
        <div className="recruit__textS" css={recruit__textS}></div>
        <div className="recruit__textS" css={recruit__textS}></div>
        <div className="recruit__textS" css={recruit__textS}></div>
        <div className="recruit__textS" css={recruit__textS}></div>
        <div className="recruit__textS" css={recruit__textS}></div>
        <div className="recruit__textS" css={recruit__textS}></div>
        <div className="recruit__textS" css={recruit__textS}></div>
        <div className="recruit__textS" css={recruit__textS}></div>
        <div className="recruit__textS" css={recruit__textS}></div>
        <div className="recruit__textS" css={recruit__textS}></div>
        <div className="recruit__textS" css={recruit__textS}></div>
        <p className="recruit__textA" css={recruit__textA}>- <b>Recruit</b>(Sample) -</p>
      </div>
    </div>
  )
}

export default Recruit;
