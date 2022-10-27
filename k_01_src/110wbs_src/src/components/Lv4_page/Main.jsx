import React from "react";
import ApiFetch from '../../hooks/ApiFetch.jsx';
import O_SIGNIN_A from './O_Signin_a.jsx';
import './Main.scss';
// import Header from "./Header";
// import Wrapper from "./Wrapper";
// import Footer from "./Footer";

const MAIN = () => {
//   render() {
    return (
      <div className="aaa">
      {/* <div onClick={()=>{this.handleClickOpen();}}> */}
        {/* <p className="App-link">View Package Summary</p> */}
      {/* </div> */}
        {/* <Header />
        <mWrapper />
        <Footer /> */}
        <p>test test test123</p>
        <ApiFetch />
        <O_SIGNIN_A />
      </div>
    );
  }
// }
export default MAIN;
