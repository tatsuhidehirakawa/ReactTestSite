/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react"

const privacy__outline = css`
  height: 701px;
  width: 963px;
  margin: 0px auto;
`;

const privacy__inlineA = css`
  height: 800px;
  width: 900px;
  margin: -116px auto 0px auto;
  padding: 50px;
  opacity: 0.5;
`;

const privacy__textA = css`
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  margin: 35px 3px 35px 0px;
  cursor: pointer;
`;

const privacy__textS = css`
  height: auto;
  width: auto;
  margin: 10px 30px 10px 30px;
  padding: 10px 10px 10px 10px;
  background-color: rgb(81, 81, 81);
  border-radius: 30px;
`;

const Privacy = () => {

  return (
    <div className="privacy--outline" css={privacy__outline}>
      <div className="privacy--inlineA" css={privacy__inlineA}>
        <p className="privacy__textA" css={privacy__textA}>- <b>Privacy</b>(Sample) -</p>
        <div className="privacy__textS" css={privacy__textS}></div>
        <div className="privacy__textS" css={privacy__textS}></div>
        <div className="privacy__textS" css={privacy__textS}></div>
        <div className="privacy__textS" css={privacy__textS}></div>
        <div className="privacy__textS" css={privacy__textS}></div>
        <div className="privacy__textS" css={privacy__textS}></div>
        <div className="privacy__textS" css={privacy__textS}></div>
        <div className="privacy__textS" css={privacy__textS}></div>
        <div className="privacy__textS" css={privacy__textS}></div>
        <div className="privacy__textS" css={privacy__textS}></div>
        <div className="privacy__textS" css={privacy__textS}></div>
        <div className="privacy__textS" css={privacy__textS}></div>
        <div className="privacy__textS" css={privacy__textS}></div>
        <div className="privacy__textS" css={privacy__textS}></div>
        <div className="privacy__textS" css={privacy__textS}></div>
        <div className="privacy__textS" css={privacy__textS}></div>
        <div className="privacy__textS" css={privacy__textS}></div>
        <p className="privacy__textA" css={privacy__textA}>- <b>Privacy</b>(Sample) -</p>
      </div>
    </div>
  )
}

export default Privacy;
