import React from "react";
import Header from "../orgs/Header";
// import Wrapper from "../orgs/Wrapper";
import Footer from "../orgs/Footer";
import './Main.scss';

const Main = ({children}) => {
  return (
    <>
    <div className="mainOutline">
      {/* <p className="mainText">Welcome to the "<code>STGprd_devpkg</code>" - Ver 0.3.0.0</p> */}
      <Header />
      {children}
    </div>
          <Footer />
          </>


  );
}
export default Main;
