/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react"

const agreement__outline = css`
  height: 701px;
  width: 963px;
  margin: 0px auto;
`;

const agreement__inlineA = css`
  height: 800px;
  width: 900px;
  margin: -116px auto 0px auto;
  padding: 50px;
  opacity: 0.5;
`;

const agreement__textA = css`
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  margin: 35px 3px 35px 0px;
  cursor: pointer;
`;

const agreement__textS = css`
  height: auto;
  width: auto;
  margin: 10px 30px 10px 30px;
  padding: 10px 10px 10px 10px;
  background-color: rgb(81, 81, 81);
  border-radius: 30px;
`;

const Agreement = () => {

  return (
    <div className="agreement--outline" css={agreement__outline}>
      <div className="agreement--inlineA" css={agreement__inlineA}>
        <p className="agreement__textA" css={agreement__textA}>- <b>Agreement</b>(Sample) -</p>
        <div className="agreement__textS" css={agreement__textS}></div>
        <div className="agreement__textS" css={agreement__textS}></div>
        <div className="agreement__textS" css={agreement__textS}></div>
        <div className="agreement__textS" css={agreement__textS}></div>
        <div className="agreement__textS" css={agreement__textS}></div>
        <div className="agreement__textS" css={agreement__textS}></div>
        <div className="agreement__textS" css={agreement__textS}></div>
        <div className="agreement__textS" css={agreement__textS}></div>
        <div className="agreement__textS" css={agreement__textS}></div>
        <div className="agreement__textS" css={agreement__textS}></div>
        <div className="agreement__textS" css={agreement__textS}></div>
        <div className="agreement__textS" css={agreement__textS}></div>
        <div className="agreement__textS" css={agreement__textS}></div>
        <div className="agreement__textS" css={agreement__textS}></div>
        <div className="agreement__textS" css={agreement__textS}></div>
        <div className="agreement__textS" css={agreement__textS}></div>
        <div className="agreement__textS" css={agreement__textS}></div>
        <p className="agreement__textA" css={agreement__textA}>- <b>Agreement</b>(Sample) -</p>
      </div>
    </div>
  )
}

export default Agreement;
