import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Top from  './components/page/Top.jsx';
import Page404 from  './components/tmps/Page404.jsx';

import Main from './components/tmps/Main.jsx';
import News from './components/tmps/News.jsx';
import Products from  './components/tmps/Products.jsx';
import Agreement from  './components/tmps/Agreement.jsx';
import Pricing from  './components/tmps/Pricing.jsx';
import UserGuide from  './components/tmps/UserGuide.jsx';
// import SignUp from  './components/tmps/SignUp.jsx';
// import SignIn from  './components/tmps/SignIn.jsx';
// import MyPage from  './components/tmps/MyPage.jsx';

import Contact from  './components/tmps/Contact.jsx';
import Recruit from  './components/tmps/Recruit.jsx';
import Company from  './components/tmps/Company.jsx';
import Privacy from  './components/tmps/Privacy.jsx';

const Pager = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Common Pass */}
        <Route path={`/`} element={<Top/>} />
        <Route path={`*`} element={<Page404 />} />
        {/* Header area */}
        <Route path={`/Main`} element={<Main />} />
        <Route path={`/News`} element={<Main><News /></Main>} />
        <Route path={`/Products`} element={<Main><Products /></Main>} />
        <Route path={`/Agreement`} element={<Main><Agreement /></Main>} />
        <Route path={`/Pricing`} element={<Main><Pricing /></Main>} />
        <Route path={`/UserGuide`} element={<Main><UserGuide /></Main>} />
        {/* <Route path={`/SignUp`} element={<Main><SignUp /></Main>} /> */}
        {/* <Route path={`/SignIn`} element={<Main><SignIn /></Main>} /> */}
        {/* <Route path={`/MyPage`} element={<Main><MyPage /></Main>} /> */}
        {/* Footer area */}
        <Route path={`/Contact`} element={<Main><Contact /></Main>} />
        <Route path={`/Recruit`} element={<Main><Recruit /></Main>} />
        <Route path={`/Company`} element={<Main><Company /></Main>} />
        <Route path={`/Privacy`} element={<Main><Privacy /></Main>} />
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