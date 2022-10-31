import React from "react";
import {  Link } from "react-router-dom";
import Kurukuru from "./kurukuru";


const Top = () => {

  return (
<>
  <Kurukuru/>
  <Link to="/main" className="App-link">View Package Summary</Link>
</>
  )
}
export default Top;