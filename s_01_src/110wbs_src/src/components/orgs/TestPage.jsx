import React from "react"
import ApiFetch from '../../hooks/ApiFetch.jsx';
import "./TestPage.scss"

const TestPage = () => {
  return (
    <div className="page--outline">
      <div className="page--inlineA">
        {/* <img src="hiyoko.svg" className="icon-beginner" /> */}
        <p className="page__textA">- <b>TestPage</b>(Sample) -</p>
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
        <div className="page__textS"></div>
        <div className="page__textS"></div>
        <div className="page__textS"></div>
        <div className="page__textS"></div>
        <div className="page__textS"></div>
        <div className="page__textS"></div>
        <div className="page__textS"></div>
        <div className="page__textS"></div>
        <p className="page__textA">- <b>TestPage</b>(Sample) -</p>
      </div>
    </div>
  )
}

export default TestPage;