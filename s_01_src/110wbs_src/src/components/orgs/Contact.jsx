/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react"

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
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  margin: 35px 3px 35px 0px;
  cursor: pointer;
`;

const textS = css`
  height: auto;
  width: auto;
  margin: 10px 30px 10px 30px;
  padding: 10px 10px 10px 10px;
  background-color: rgb(81, 81, 81);
  border-radius: 30px;
`;

const Contact = () => {

  return (
    <div className="contact--outline" css={outline}>
      <div className="contact--inlineA" css={inlineA}>
        <p className="contact__textA" css={textA}>- <b>Contact</b>(Sample) -</p>
        <div className="contact__textS" css={textS}></div>
        <div className="contact__textS" css={textS}></div>
        <div className="contact__textS" css={textS}></div>
        <div className="contact__textS" css={textS}></div>
        <div className="contact__textS" css={textS}></div>
        <div className="contact__textS" css={textS}></div>
        <div className="contact__textS" css={textS}></div>
        <div className="contact__textS" css={textS}></div>
        <div className="contact__textS" css={textS}></div>
        <div className="contact__textS" css={textS}></div>
        <div className="contact__textS" css={textS}></div>
        <div className="contact__textS" css={textS}></div>
        <div className="contact__textS" css={textS}></div>
        <div className="contact__textS" css={textS}></div>
        <div className="contact__textS" css={textS}></div>
        <div className="contact__textS" css={textS}></div>
        <div className="contact__textS" css={textS}></div>
        <p className="contact__textA" css={textA}>- <b>Contact</b>(Sample) -</p>
      </div>
    </div>
  )
}

export default Contact;
