import React from "react";
import Header from "../orgs/Header";
import Footer from "../orgs/Footer";
import './Layout.scss';

const Layout = ({children}) => {
  return (
    <>
    <div className="LayoutOutline">
      {/* <p className="LayoutText">Welcome to the "<code>STGprd_devpkg</code>" - Ver 0.3.0.0</p> */}
      <Header />
      {children}
      <Footer />
    </div>
    </>
  );
}
export default Layout;
