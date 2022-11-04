import React from "react"
import ApiFetch from '../../hooks/ApiFetch.jsx';
import "./TestPage.scss"

const TestPage = () => {
  return (
    <div className="OutlineA">
      <div className="InlineA">
        {/* <img src="hiyoko.svg" className="icon-beginner" /> */}
        <p className="TestPageTextA">- Products -</p>
        <div className="TestPageTextB"></div>
        <div className="TestPageTextB"></div>
        <div className="TestPageTextB"></div>
        <ApiFetch />
        <div className="TestPageTextB"></div>
        <div className="TestPageTextB"></div>
        <div className="TestPageTextB"></div>
        <div className="TestPageTextB"></div>
      </div>
    </div>
  )
}

export default TestPage;