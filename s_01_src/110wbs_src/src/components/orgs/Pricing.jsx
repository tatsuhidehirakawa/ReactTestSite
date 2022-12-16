/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react"

const pricing__outline = css`
  height: 701px;
  width: 963px;
  margin: 0px auto;
`;

const pricing__inlineA = css`
  height: 800px;
  width: 900px;
  margin: -116px auto 0px auto;
  padding: 50px;
  opacity: 0.5;
`;

const pricing__textA = css`
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  margin: 35px 3px 35px 0px;
  cursor: pointer;
`;

const pricing__textS = css`
  height: auto;
  width: auto;
  margin: 10px 30px 10px 30px;
  padding: 10px 10px 10px 10px;
  background-color: rgb(81, 81, 81);
  border-radius: 30px;
`;

const Pricing = () => {

  return (
    <div className="pricing--outline" css={pricing__outline}>
      <div className="pricing--inlineA" css={pricing__inlineA}>
        <p className="pricing__textA" css={pricing__textA}>- <b>Pricing</b>(Sample) -</p>
        <div className="pricing__textS" css={pricing__textS}></div>
        <div className="pricing__textS" css={pricing__textS}></div>
        <div className="pricing__textS" css={pricing__textS}></div>
        <div className="pricing__textS" css={pricing__textS}></div>
        <div className="pricing__textS" css={pricing__textS}></div>
        <div className="pricing__textS" css={pricing__textS}></div>
        <div className="pricing__textS" css={pricing__textS}></div>
        <div className="pricing__textS" css={pricing__textS}></div>
        <div className="pricing__textS" css={pricing__textS}></div>
        <div className="pricing__textS" css={pricing__textS}></div>
        <div className="pricing__textS" css={pricing__textS}></div>
        <div className="pricing__textS" css={pricing__textS}></div>
        <div className="pricing__textS" css={pricing__textS}></div>
        <div className="pricing__textS" css={pricing__textS}></div>
        <div className="pricing__textS" css={pricing__textS}></div>
        <div className="pricing__textS" css={pricing__textS}></div>
        <div className="pricing__textS" css={pricing__textS}></div>
        <p className="pricing__textA" css={pricing__textA}>- <b>Pricing</b>(Sample) -</p>
      </div>
    </div>
  )
}

export default Pricing;
