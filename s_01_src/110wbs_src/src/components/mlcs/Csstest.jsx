/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react"
import './Csstest.scss';

const Csstest = () => {

  const emotioncss = css`
    color: powderblue;
    font-size: 20px;
    text-align: center;
  `;

  return (
    <>
      <div className="card--outline" >
        <p>This is</p><p css={emotioncss}>Emotion(blue)</p>
        <p>This is</p><p className="text-green-600 text-xl text-center">TailwindCSS(green)</p>
        <p>This is</p><p className="csstest-sass">Sass(blue)</p>
      </div>
    </>
  )
}

export default Csstest;
