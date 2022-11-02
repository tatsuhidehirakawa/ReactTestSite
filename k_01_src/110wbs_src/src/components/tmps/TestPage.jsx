import React from "react"
import ApiFetch from '../../hooks/ApiFetch.jsx';
import "./TestPage.scss"

const TestPage = () => {
  return (
    <div className="TestPageOutline">
      <div className="TestPageInlines">
        {/* <img src="hiyoko.svg" className="icon-beginner" /> */}
        <p className="TestPage_text_a">- Products -</p>
        <div className="templete_text"></div>
        <div className="templete_text"></div>
        <div className="templete_text"></div>
        <ApiFetch />
        <div className="templete_text"></div>
        <div className="templete_text"></div>
        <div className="templete_text"></div>
        <div className="templete_text"></div>
      </div>
    </div>
  )
}

export default TestPage;