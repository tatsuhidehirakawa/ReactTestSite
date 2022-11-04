import React from "react"
import ApiFetch from '../../hooks/ApiFetch.jsx';
import "./SignUp.scss"

const SignUp = () => {
  return (
    <div className="bbb">
      {/* <img src="hiyoko.svg" className="icon-beginner" /> */}
      <p className="MyPage_text_a">- SignUp -</p>
      <div className="templete_text"></div>
      <div className="templete_text"></div>
      <div className="templete_text"></div>
      <div className="templete_text"></div>
      <div className="templete_text"></div>
      <ApiFetch />
      <div className="templete_text"></div>
      <div className="templete_text"></div>
      <p className="SignUp_text_a">- SignUp -</p>
    </div>
  )
}

export default SignUp;