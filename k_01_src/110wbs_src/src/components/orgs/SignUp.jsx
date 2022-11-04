import React from "react"
import ApiFetch from '../../hooks/ApiFetch.jsx';
import "./SignUp.scss"

const SignUp = () => {
  return (
    <div className="PageOutline">
            <div className="PageInlineA">

      {/* <img src="hiyoko.svg" className="icon-beginner" /> */}
      <p className="PageTextA">- SignUp -</p>
      <div className="templete_text"></div>
      <div className="templete_text"></div>
      <div className="templete_text"></div>
      <div className="templete_text"></div>
      <div className="templete_text"></div>
      <ApiFetch />
      <div className="templete_text"></div>
      <div className="templete_text"></div>
      <p className="PageTextA">- SignUp -</p>
      </div>
    </div>
    )
}

export default SignUp;