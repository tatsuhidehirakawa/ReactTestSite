import React from "react";
import Header from "../orgs/Header";
import Footer from "../orgs/Footer";
import './Layout.scss';

const Layout = ({children}) => {
  return (
    <>
    <div className="LayoutOutline">
      {/* <p className="LayoutText">Welcome to the "<code>STGprd_devpkg</code>" - Ver 0.3.0.0</p> */}
      <ul className="flex-list>">
        <li className="li1"><Header /></li>
        <li className="li2">{children}</li>
        <li className="li3"><Footer /></li>
      </ul>
    </div>
    </>
  );
}
export default Layout;
