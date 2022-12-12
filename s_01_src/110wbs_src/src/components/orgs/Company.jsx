/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react"

const Company = () => {

  const company__outline = css`
    height: 701px;
    width: 963px;
    margin: 0px auto;
`;

  const company__inlineA = css`
    height: 800px;
    width: 900px;
    margin: -116px auto 0px auto;
    padding: 50px;
    opacity: 0.5;
  `;

  const company__textA = css`
    color: rgb(0, 0, 0);
    padding: 0px 0px 0px 0px;
    margin: 35px 3px 35px 0px;
    cursor: pointer;
  `;

  const company__textS = css`
    height: auto;
    width: auto;
    margin: 10px 30px 10px 30px;
    padding: 10px 10px 10px 10px;
    background-color: rgb(81, 81, 81);
    border-radius: 30px;
  `;

  return (
    <div className="company--outline" css={company__outline}>
      <div className="company--inlineA" css={company__inlineA}>
        <p className="company__textA" css={company__textA}>- <b>Company</b>(Sample) -</p>
        <div className="company__textS" css={company__textS}></div>
        <div className="company__textS" css={company__textS}></div>
        <div className="company__textS" css={company__textS}></div>
        <div className="company__textS" css={company__textS}></div>
        <div className="company__textS" css={company__textS}></div>
        <div className="company__textS" css={company__textS}></div>
        <div className="company__textS" css={company__textS}></div>
        <div className="company__textS" css={company__textS}></div>
        <div className="company__textS" css={company__textS}></div>
        <div className="company__textS" css={company__textS}></div>
        <div className="company__textS" css={company__textS}></div>
        <div className="company__textS" css={company__textS}></div>
        <div className="company__textS" css={company__textS}></div>
        <div className="company__textS" css={company__textS}></div>
        <div className="company__textS" css={company__textS}></div>
        <div className="company__textS" css={company__textS}></div>
        <div className="company__textS" css={company__textS}></div>
        <p className="company__textA" css={company__textA}>- <b>Company</b>(Sample) -</p>
      </div>
    </div>
  )
}

export default Company;
