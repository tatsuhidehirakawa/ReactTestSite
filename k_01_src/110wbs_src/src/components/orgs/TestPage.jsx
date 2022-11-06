import React from "react"
import ApiFetch from '../../hooks/ApiFetch.jsx';
import "./TestPage.scss"

const TestPage = () => {
  return (
    <div className="PageOutline">
      <div className="PageInlineA">
        {/* <img src="hiyoko.svg" className="icon-beginner" /> */}
        <p className="PageTextA">- <b>TestPage</b>(Sample) -</p>
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
        <div className="PageTextS"></div>
        <div className="PageTextS"></div>
        <div className="PageTextS"></div>
        <div className="PageTextS"></div>
        <div className="PageTextS"></div>
        <div className="PageTextS"></div>
        <div className="PageTextS"></div>
        <div className="PageTextS"></div>
        <p className="PageTextA">- <b>TestPage</b>(Sample) -</p>
      </div>
    </div>
  )
}

export default TestPage;