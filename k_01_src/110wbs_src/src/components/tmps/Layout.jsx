import React from "react";
import Header from "../orgs/Header";
import Footer from "../orgs/Footer";
import './Layout.scss';

const Layout = ({children}) => {
  return (
    <>
    <div className="LayoutOutline">
      <div className="flex-list>">
        <div className="li1"><Header /></div>
        <div className="li2">{children}</div>
        <div className="li3"><Footer /></div>
      </div>
    </div>
    </>
  );
}
export default Layout;
