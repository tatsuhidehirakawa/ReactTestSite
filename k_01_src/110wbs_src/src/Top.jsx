import React from "react";
import {  Link } from "react-router-dom";
import Nucleus from "./Nucleus";


const Top = () => {
  return (
    <>
    <Nucleus/>
    <Link to="/main" className="App-link">View Package Summary</Link>
    </>
  )
}
export default Top;