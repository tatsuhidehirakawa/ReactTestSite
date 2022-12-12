/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react"

const Contact = () => {

  const contact__outline = css`
    height: 701px;
    width: 963px;
    margin: 0px auto;
`;

  const contact__inlineA = css`
    height: 800px;
    width: 900px;
    margin: -116px auto 0px auto;
    padding: 50px;
    opacity: 0.5;
  `;

  const contact__textA = css`
    color: rgb(0, 0, 0);
    padding: 0px 0px 0px 0px;
    margin: 35px 3px 35px 0px;
    cursor: pointer;
  `;

  const contact__textS = css`
    height: auto;
    width: auto;
    margin: 10px 30px 10px 30px;
    padding: 10px 10px 10px 10px;
    background-color: rgb(81, 81, 81);
    border-radius: 30px;
  `;

  return (
    <div className="contact--outline" css={contact__outline}>
      <div className="contact--inlineA" css={contact__inlineA}>
        <p className="contact__textA" css={contact__textA}>- <b>Contact</b>(Sample) -</p>
        <div className="contact__textS" css={contact__textS}></div>
        <div className="contact__textS" css={contact__textS}></div>
        <div className="contact__textS" css={contact__textS}></div>
        <div className="contact__textS" css={contact__textS}></div>
        <div className="contact__textS" css={contact__textS}></div>
        <div className="contact__textS" css={contact__textS}></div>
        <div className="contact__textS" css={contact__textS}></div>
        <div className="contact__textS" css={contact__textS}></div>
        <div className="contact__textS" css={contact__textS}></div>
        <div className="contact__textS" css={contact__textS}></div>
        <div className="contact__textS" css={contact__textS}></div>
        <div className="contact__textS" css={contact__textS}></div>
        <div className="contact__textS" css={contact__textS}></div>
        <div className="contact__textS" css={contact__textS}></div>
        <div className="contact__textS" css={contact__textS}></div>
        <div className="contact__textS" css={contact__textS}></div>
        <div className="contact__textS" css={contact__textS}></div>
        <p className="contact__textA" css={contact__textA}>- <b>Contact</b>(Sample) -</p>
      </div>
    </div>
  )
}

export default Contact;
