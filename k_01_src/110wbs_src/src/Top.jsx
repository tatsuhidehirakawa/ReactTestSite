import React from "react";
import {  Link } from "react-router-dom";
import Nukes from "./Nukes";


const Top = () => {
  return (
    <>
    <Nukes/>
    <Link to="/main" className="App-link">View Package Summary</Link>
    </>
  )
}
export default Top;