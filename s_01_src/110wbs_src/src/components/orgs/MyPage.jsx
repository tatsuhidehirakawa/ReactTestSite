/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react"
import User from "../../hooks/User"

const mypage__outline = css`
  height: 701px;
  width: 963px;
  margin: 0px auto;
`;

const mypage__inlineA = css`
  height: 800px;
  width: 900px;
  margin: -116px auto 0px auto;
  padding: 50px;
  opacity: 0.5;
`;

const mypage__textA = css`
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  margin: 35px 3px 35px 0px;
  cursor: pointer;
`;

const mypage__textS = css`
  height: auto;
  width: auto;
  margin: 10px 30px 10px 30px;
  padding: 10px 10px 10px 10px;
  background-color: rgb(81, 81, 81);
  border-radius: 30px;
`;

const MyPage = () => {

  return (
    <div className="mypage--outline" css={mypage__outline}>
      <div className="mypage--inlineA" css={mypage__inlineA}>
        <p className="mypage__textA" css={mypage__textA}>- <b>MyPage</b>(Sample) -</p>
        <div className="mypage__textS" css={mypage__textS}></div>
        <div className="mypage__textS" css={mypage__textS}></div>
        <div className="mypage__textS" css={mypage__textS}></div>
        <div className="mypage__textS" css={mypage__textS}></div>
        <div className="mypage__textS" css={mypage__textS}></div>
        <div className="mypage__textS" css={mypage__textS}></div>
        <div className="mypage__textS" css={mypage__textS}></div>
        <div className="mypage__textS" css={mypage__textS}></div>
        <User />
        <div className="mypage__textS" css={mypage__textS}></div>
        <div className="mypage__textS" css={mypage__textS}></div>
        <div className="mypage__textS" css={mypage__textS}></div>
        <div className="mypage__textS" css={mypage__textS}></div>
        <div className="mypage__textS" css={mypage__textS}></div>
        <div className="mypage__textS" css={mypage__textS}></div>
        <div className="mypage__textS" css={mypage__textS}></div>
        <div className="mypage__textS" css={mypage__textS}></div>
        <div className="mypage__textS" css={mypage__textS}></div>
        <p className="mypage__textA" css={mypage__textA}>- <b>MyPage</b>(Sample) -</p>
      </div>
    </div>
  )
}

export default MyPage;
