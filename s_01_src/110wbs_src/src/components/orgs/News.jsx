/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react"

const News = () => {

  const news__outline = css`
    height: 701px;
    width: 963px;
    margin: 0px auto;
`;

  const news__inlineA = css`
    height: 800px;
    width: 900px;
    margin: -116px auto 0px auto;
    padding: 50px;
    opacity: 0.5;
  `;

  const news__textA = css`
    color: rgb(0, 0, 0);
    padding: 0px 0px 0px 0px;
    margin: 35px 3px 35px 0px;
    cursor: pointer;
  `;

  const news__textS = css`
    height: auto;
    width: auto;
    margin: 10px 30px 10px 30px;
    padding: 10px 10px 10px 10px;
    background-color: rgb(81, 81, 81);
    border-radius: 30px;
  `;

  return (
    <div className="news--outline" css={news__outline}>
      <div className="news--inlineA" css={news__inlineA}>
        <p className="news__textA" css={news__textA}>- <b>News</b>(Sample) -</p>
          <p>
            202x.xx.xx: サービスのローンチを行なった。<br />
            202x.xx.xx: xx機能をリリースしました。<br />
          </p>
        <div className="news__textS" css={news__textS}></div>
        <div className="news__textS" css={news__textS}></div>
        <div className="news__textS" css={news__textS}></div>
        <div className="news__textS" css={news__textS}></div>
        <div className="news__textS" css={news__textS}></div>
        <div className="news__textS" css={news__textS}></div>
        <div className="news__textS" css={news__textS}></div>
        <div className="news__textS" css={news__textS}></div>
        <div className="news__textS" css={news__textS}></div>
        <div className="news__textS" css={news__textS}></div>
        <div className="news__textS" css={news__textS}></div>
        <div className="news__textS" css={news__textS}></div>
        <div className="news__textS" css={news__textS}></div>
        <div className="news__textS" css={news__textS}></div>
        <div className="news__textS" css={news__textS}></div>
        <p className="news__textA" css={news__textA}>- <b>News</b>(Sample) -</p>
      </div>
    </div>
  )
}

export default News;
