import React, { Children } from "react";
import ApiFetch from '../../hooks/ApiFetch.jsx';
import O_SIGNIN_A from '../page/O_Signin_a.jsx';
// import Pager from '../../Pager.jsx';
import './Main.scss';
// import Header from "./Header";
// import Wrapper from "./Wrapper";
// import Footer from "./Footer";
import { Link } from "react-router-dom";

const Main = ({children}) => {

//   render() {
    return (
      <div className="bbb">
              <p className="Main_text_a">- Main -</p>
      {/* <Link to="/App" className="App-link">View Package Summary</Link> */}
      {/* <Link to="/Main" className="App-link">Main</Link> */}
      <Link to="/Products" className="App-link">Products</Link>
      <Link to="UserGuide" className="App-link">UserGuide</Link>
      {/* <Link to="/Agreement" className="App-link">Agreement</Link>
      <Link to="/Pricing" className="App-link">Pricing</Link>
      <Link to="/Privacy" className="App-link">Privacy</Link> */}
      <Link to="/ContactUs" className="App-link">ContactUs</Link>
      <Link to="/Company" className="App-link">Company</Link>

      {/* <div onClick={()=>{this.handleClickOpen();}}> */}
        {/* <p className="App-link">View Package Summary</p> */}
      {/* </div> */}
        {/* <Header />
        <mWrapper />
        <Footer /> */}
        {/* <Pager /> */}
        <O_SIGNIN_A />
        <ApiFetch />
        {children}
      </div>
    );
  }
// }
export default Main;
