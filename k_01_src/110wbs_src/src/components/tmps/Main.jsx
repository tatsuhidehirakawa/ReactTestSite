import React from "react";
import ApiFetch from '../../hooks/ApiFetch.jsx';
import O_SIGNIN_A from '../page/O_Signin_a.jsx';
// import Pager from '../../Pager.jsx';
import './Main.scss';
// import Header from "./Header";
// import Wrapper from "./Wrapper";
// import Footer from "./Footer";

const Main = () => {
//   render() {
    return (
      <div className="bbb">
              <p className="Main_text_a">- Main -</p>

      {/* <div onClick={()=>{this.handleClickOpen();}}> */}
        {/* <p className="App-link">View Package Summary</p> */}
      {/* </div> */}
        {/* <Header />
        <mWrapper />
        <Footer /> */}
        {/* <Pager /> */}
        <O_SIGNIN_A />
        <ApiFetch />
      </div>
    );
  }
// }
export default Main;
