import React from "react";
import Header from "../orgs/Header";
import Footer from "../orgs/Footer";
import './Layout.scss';

const Layout = ({children}) => {
  return (
    <>
    <div className="layout--outline__violet">
      <div className="layout--outline__inlineA__header"><Header /></div>
      {/* <div className="aaaccc"> */}
        <div className="layout--outline__inlineB__children">{children}</div>
      {/* </div> */}
      <div className="layout--outline__inlineC__footer"><Footer /></div>
    </div>
    </>
  );
}

export default Layout;
