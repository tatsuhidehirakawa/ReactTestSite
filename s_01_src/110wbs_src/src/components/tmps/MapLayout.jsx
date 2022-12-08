import React from "react";
import Header from "../orgs/Header";
import Footer from "../orgs/Footer";

const MapLayout = ({children}) => {
// const MapLayout = ({children: [ aaa, bbb, ccc ] }) => {
    return (
    <div className="absolute top-0	flex relative min-h-screen flex-col">
      <div><Header /></div>
      <div className="justify-center mt-[69px] mb-[237px]">{children}</div>
      {/* <div className="justify-center mt-[69px] mb-[237px]">{aaa}</div>
      <div className="flex flex-col w-72 mt-[69px] mb-[237px]">{bbb}</div>
      <div className="flex flex-col w-72 mt-[69px] mb-[237px]">{ccc}</div> */}
      <div><Footer /></div>
    </div>
  );
}

export default MapLayout;



// const Page1=()=>{
// <Layout>
// 1
// </Layout>
// }
// const Page2=()=>{
// <Layout>
// 2
// </Layout>
// }

// <Layout children={1}/>


// const Page1=()=>{
// <Layout>
// {loading ? "loading" : 1}
// </Layout>
// }
// シングルカラムレイアウト

// const Layout =({header,children})=>{
// return(
// <header />
// {children}
// <footer />
// )
// }