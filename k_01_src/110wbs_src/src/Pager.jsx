import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from './components/tmps/Main.jsx'
import Products from  './components/tmps/Products.jsx'
import Agreement from  './components/tmps/Agreement.jsx'
import Pricing from  './components/tmps/Pricing.jsx'
import UserGuide from  './components/tmps/UserGuide.jsx'
import Privacy from  './components/tmps/Privacy.jsx'
import ContactUs from  './components/tmps/ContactUs.jsx'
import Company from  './components/tmps/Company.jsx'
import Recruit from  './components/tmps/Recruit.jsx'
import Top from  './components/page/Top.jsx'
import Page404 from  './components/tmps/Page404.jsx'

const Pager = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Top/>} />
        <Route path={`/Main`} element={<Main />} />
        <Route path={`/Products`} element={<Main><Products /></Main>} />
        <Route path={`/UserGuide`} element={<Main><UserGuide /></Main>} />
        <Route path={`/Agreement`} element={<Main><Agreement /></Main>} />
        <Route path={`/Pricing`} element={<Main><Pricing /></Main>} />
        <Route path={`/Privacy`} element={<Main><Privacy /></Main>} />
        <Route path={`/ContactUs`} element={<Main><ContactUs /></Main>} />
        <Route path={`/Recruit`} element={<Main><Recruit /></Main>} />
        <Route path={`/Company`} element={<Main><Company /></Main>} />
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