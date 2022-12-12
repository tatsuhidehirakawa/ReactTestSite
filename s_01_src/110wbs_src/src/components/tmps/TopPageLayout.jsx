import React from "react";
import Header from "../orgs/Header";
import Footer from "../orgs/Footer";
// import '../../Pager.scss';

const TopPageLayout = ({children}) => {
  return (
    <div className="top-0	flex relative min-h-screen flex-col">
      <div><Header /></div>
      <div className="justify-center mt-[69px] mb-[237px]">{children}</div>
      <div><Footer /></div>
    </div>
  );
}

export default TopPageLayout;
