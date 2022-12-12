/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react"

const UserGuide = () => {

  const userguide__outline = css`
    height: 701px;
    width: 963px;
    margin: 0px auto;
`;

  const userguide__inlineA = css`
    height: 800px;
    width: 900px;
    margin: -116px auto 0px auto;
    padding: 50px;
    opacity: 0.5;
  `;

  const userguide__textA = css`
    color: rgb(0, 0, 0);
    padding: 0px 0px 0px 0px;
    margin: 35px 3px 35px 0px;
    cursor: pointer;
  `;

  const userguide__textS = css`
    height: auto;
    width: auto;
    margin: 10px 30px 10px 30px;
    padding: 10px 10px 10px 10px;
    background-color: rgb(81, 81, 81);
    border-radius: 30px;
  `;

  return (
    <div className="userguide--outline" css={userguide__outline}>
      <div className="userguide--inlineA" css={userguide__inlineA}>
        <p className="userguide__textA" css={userguide__textA}>- <b>UserGuide</b>(Sample) -</p>
        <div className="userguide__textS" css={userguide__textS}></div>
        <div className="userguide__textS" css={userguide__textS}></div>
        <div className="userguide__textS" css={userguide__textS}></div>
        <div className="userguide__textS" css={userguide__textS}></div>
        <div className="userguide__textS" css={userguide__textS}></div>
        <div className="userguide__textS" css={userguide__textS}></div>
        <div className="userguide__textS" css={userguide__textS}></div>
        <div className="userguide__textS" css={userguide__textS}></div>
        <div className="userguide__textS" css={userguide__textS}></div>
        <div className="userguide__textS" css={userguide__textS}></div>
        <div className="userguide__textS" css={userguide__textS}></div>
        <div className="userguide__textS" css={userguide__textS}></div>
        <div className="userguide__textS" css={userguide__textS}></div>
        <div className="userguide__textS" css={userguide__textS}></div>
        <div className="userguide__textS" css={userguide__textS}></div>
        <div className="userguide__textS" css={userguide__textS}></div>
        <div className="userguide__textS" css={userguide__textS}></div>
        <p className="userguide__textA" css={userguide__textA}>- <b>UserGuide</b>(Sample) -</p>
      </div>
    </div>
  )
}

export default UserGuide;
