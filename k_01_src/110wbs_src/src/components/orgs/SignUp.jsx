import React from "react"
import ApiFetch from '../../hooks/ApiFetch.jsx';
import "./SignUp.scss"

const SignUp = () => {
  return (
    <div className="PageOutline">
            <div className="PageInlineA">

      {/* <img src="hiyoko.svg" className="icon-beginner" /> */}
      <p className="PageTextA">- <b>SignUp</b>(Sample) -</p>
      <div className="PageTextS"></div>
        <div className="PageTextS"></div>
        <div className="PageTextS"></div>
        <div className="PageTextS"></div>
        <div className="PageTextS"></div>
        <div className="PageTextS"></div>
        <div className="PageTextS"></div>
        <div className="PageTextS"></div>
      <ApiFetch />
      <div className="PageTextS"></div>
        <div className="PageTextS"></div>
        <div className="PageTextS"></div>
        <div className="PageTextS"></div>
        <div className="PageTextS"></div>
        <div className="PageTextS"></div>
        <div className="PageTextS"></div>
        <div className="PageTextS"></div>
      <p className="PageTextA">- <b>SignUp</b>(Sample) -</p>
      </div>
    </div>
    )
}

export default SignUp;