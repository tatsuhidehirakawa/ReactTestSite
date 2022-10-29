import React from "react";
import ApiFetch from '../../hooks/ApiFetch.jsx';
import O_SIGNIN_A from '../page/O_Signin_a.jsx';
import Pager from '../../Pager.jsx';
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
        <Pager />
        <ApiFetch />
        <O_SIGNIN_A />
      </div>
    );
  }
// }
export default MAIN;
