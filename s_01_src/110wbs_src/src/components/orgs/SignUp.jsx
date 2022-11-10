import React from "react"
import ApiFetch from '../../hooks/ApiFetch.jsx';
import "./SignUp.scss"

const SignUp = () => {
  return (
    <div className="page--outline">
            <div className="page--inlineA">

      {/* <img src="hiyoko.svg" className="icon-beginner" /> */}
      <p className="page__textA">- <b>SignUp</b>(Sample) -</p>
      <div className="page__textS"></div>
        <div className="page__textS"></div>
        <div className="page__textS"></div>
        <div className="page__textS"></div>
        <div className="page__textS"></div>
        <div className="page__textS"></div>
        <div className="page__textS"></div>
        <div className="page__textS"></div>
      <ApiFetch />
      <div className="page__textS"></div>
        <div className="page__textS"></div>
        <div className="page__textS"></div>
        <div className="page__textS"></div>
        <div className="page__textS"></div>
        <div className="page__textS"></div>
        <div className="page__textS"></div>
        <div className="page__textS"></div>
      <p className="page__textA">- <b>SignUp</b>(Sample) -</p>
      </div>
    </div>
    )
}

export default SignUp;