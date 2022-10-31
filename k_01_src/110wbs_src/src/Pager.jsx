import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import App from './App.js'
import Main from './components/tmps/Main.jsx'
import Products from  './components/tmps/Products.jsx'
import UserGuide from  './components/tmps/UserGuide.jsx'
// import Agreement from  './components/tmps/Agreement.jsx'
// import Pricing from  './components/tmps/Pricing.jsx'
// import Privacy from  './components/tmps/Privacy.jsx'
import ContactUs from  './components/tmps/ContactUs.jsx'
import Company from  './components/tmps/Company.jsx'
import Top from  './components/page/Top.jsx'
import Page404 from  './components/tmps/Page404.jsx'

const Pager = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={`/`} element={<Main>Product</Main>} /> */}
        <Route path={`/`} element={<Top/>} />
        <Route path={`/Main`} element={<Main />} />
        <Route path={`/Products/`} element={<Main><Products/></Main>} />
        <Route path={`/UserGuide/`} element={<Main><UserGuide/></Main>} />
        {/* <Route path={`/Agreement/`} element={<Agreement />} />
        <Route path={`/Pricing/`} element={<Pricing />} />
        <Route path={`/Privacy/`} element={<Privacy />} /> */}
        <Route path={`/ContactUs/`} element={<ContactUs />} />
        <Route path={`/Company/`} element={<Company />} />
        <Route path={`*`} element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
export default Pager;

// <Route path="/" element={<Main>landingcomp</App>}>

// <Route path="/main" element={<Main>product</Main>}>
// <Route path="/other" element={<Main>other</Main>}></Route>


// const Layout =({children})=>{
// return(
// <header/>
// {children}
// <footer/>
// )
// }

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
// {header}
// {children}
// <footer/>
// )
// }