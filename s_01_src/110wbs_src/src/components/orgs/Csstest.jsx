/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react"
import './Csstest.scss';

const Csstest = () => {

  const csstest_emotion = css`
    color: fuchsia;
    font-size: 20px;
    text-align: center;
  `;

  return (
    <>
      <div className="card--outline" >
        <p style={{fontSize:"20px",marginBottom:"50px"}}>CSS-in-JS test components</p>
        <p style={{color:"red",fontSize:"20px"}}>This is inline style(orange)</p>
        <p className="csstest_sass">This is Sass(blue)</p>
        <p css={csstest_emotion}>This is Emotion(red)</p>
        <p className="text-green-600 text-xl text-center">This is TailwindCSS(green)</p>
      </div>
    </>
  )
}

export default Csstest;
