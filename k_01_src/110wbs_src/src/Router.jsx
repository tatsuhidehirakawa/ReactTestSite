import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Top from  './components/page/Top.jsx';
import Page404 from  './components/tmps/Page404.jsx';
import TestPage from './components/tmps/TestPage.jsx';
import Layout from './components/tmps/Layout.jsx';
import News from './components/tmps/News.jsx';
// import Products from  './components/tmps/Products.jsx';
import Agreement from  './components/tmps/Agreement.jsx';
import Pricing from  './components/tmps/Pricing.jsx';
import UserGuide from  './components/tmps/UserGuide.jsx';
import SignUp from  './components/tmps/SignUp.jsx';
// import SignIn from  './components/tmps/SignIn.jsx';
import MyPage from  './components/tmps/MyPage.jsx';
import Contact from  './components/tmps/Contact.jsx';
import Recruit from  './components/tmps/Recruit.jsx';
import Company from  './components/tmps/Company.jsx';
import Privacy from  './components/tmps/Privacy.jsx';
import Main from  './components/tmps/Main.jsx';
// import Header from  './components/orgs/Header.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Top/>} />
        <Route path={`*`} element={<Page404 />} />
        <Route path={`/News`} element={<Layout><News /></Layout>} />
        {/* <Route path={`/Products`} element={<Layout><Products /></Layout>} /> */}
        <Route path={`/TestPage`} element={<Layout><TestPage /></Layout>} />
        <Route path={`/Pricing`} element={<Layout><Pricing /></Layout>} />
        <Route path={`/Main`} element={<Layout><Main /></Layout>} />
        <Route path={`/Agreement`} element={<Layout><Agreement /></Layout>} />
        <Route path={`/UserGuide`} element={<Layout><UserGuide /></Layout>} />
        <Route path={`/SignUp`} element={<Layout><SignUp /></Layout>} />
        {/* <Route path={`/SignIn`} element={<Layout><SignIn /></Layout>} /> */}
        <Route path={`/MyPage`} element={<Layout><MyPage /></Layout>} />
        <Route path={`/Contact`} element={<Layout><Contact /></Layout>} />
        <Route path={`/Recruit`} element={<Layout><Recruit /></Layout>} />
        <Route path={`/Company`} element={<Layout><Company /></Layout>} />
        <Route path={`/Privacy`} element={<Layout><Privacy /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}
export default Router;


// <Route path="/" element={<Main>landingcomp</App>}>

// <Route path="/main" element={<Main>product</Main>}>
// <Route path="/other" element={<Main>other</Main>}></Route>


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