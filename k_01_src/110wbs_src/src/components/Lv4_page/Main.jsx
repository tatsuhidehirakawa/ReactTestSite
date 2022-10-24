import React from "react";
import ApiFetch from './components/Lv1_atms/ApiFetch.jsx';
import './Main.scss';
// import Header from "./Header";
// import Wrapper from "./Wrapper";
// import Footer from "./Footer";

const MAIN = () => {
//   render() {
    return (
      <>
      <div onClick={()=>{this.handleClickOpen();}}>
        <p className="App-link">View Package Summary</p>
      </div>
        {/* <Header />
        <mWrapper />
        <Footer /> */}
      <ApiFetch />
      </>
    );
  }
// }
export default MAIN;
