import React from "react";
import Header from "../orgs/Header";
import Footer from "../orgs/Footer";
// import '../../Pager.scss';

const MainLayout = ({children}) => {
  return (
    <div className="top-0	flex relative min-h-screen flex-col bg-[#fbfaf5]">
      <div><Header /></div>
      <div className="px-[25px] pt-[150px] pb-[50px] justify-center mt-[69px] mb-[237px]">{children}</div>
      <div><Footer /></div>
    </div>
  );
}

export default MainLayout;
