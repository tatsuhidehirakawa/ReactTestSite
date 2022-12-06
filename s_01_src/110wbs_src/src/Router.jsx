import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Main from  './components/tmps/Main.jsx';
import Page404 from  './components/orgs/Page404.jsx';
// import TestPage from './components/orgs/TestPage.jsx';
import Layout from './components/tmps/Layout.jsx';
import News from './components/orgs/News.jsx';
import Products from  './components/orgs/Products.jsx';
import Agreement from  './components/orgs/Agreement.jsx';
// import Pricing from  './components/orgs/Pricing.jsx';
import PricingContent from  './components/orgs/Pricing.tsx';
import UserGuide from  './components/orgs/UserGuide.jsx';
// import SignUp from  './components/orgs/SignUp.jsx';
import SignUp from  './components/orgs/SignUp.tsx';
import SignIn from  './components/orgs/SignIn.tsx';
import MyPage from  './components/orgs/MyPage.jsx';
import Contact from  './components/orgs/Contact.jsx';
import Recruit from  './components/orgs/Recruit.jsx';
import Company from  './components/orgs/Company.jsx';
import Privacy from  './components/orgs/Privacy.jsx';
import SiteTop from  './components/orgs/SiteTop.jsx';
import Offer from  './components/orgs/Offer.jsx';
import Coordinate from  './components/orgs/Coordinate.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Main/>} />
        {/* <Route path={`/`} element={<http://www.sample.com/landingpage.html>} /> */}  {/* Change CORS setting sat API*/}
        <Route path={`*`} element={<Layout><Page404 /></Layout>} />

        <Route path={`/News`} element={<Layout><News /></Layout>} />
        <Route path={`/Products`} element={<Layout><Products /></Layout>} />
        {/* <Route path={`/TestPage`} element={<Layout><TestPage /></Layout>} /> */}
        <Route path={`/Pricing`} element={<Layout><PricingContent /></Layout>} />

        <Route path={`/SiteTop`} element={<Layout><SiteTop /></Layout>} />
        <Route path={`/Agreement`} element={<Layout><Agreement /></Layout>} />
        <Route path={`/UserGuide`} element={<Layout><UserGuide /></Layout>} />
        <Route path={`/SignUp`} element={<Layout><SignUp /></Layout>} />
        <Route path={`/SignIn`} element={<Layout><SignIn /></Layout>} />
        <Route path={`/MyPage`} element={<Layout><MyPage /></Layout>} />
        <Route path={`/Contact`} element={<Layout><Contact /></Layout>} />
        <Route path={`/Recruit`} element={<Layout><Recruit /></Layout>} />
        <Route path={`/Company`} element={<Layout><Company /></Layout>} />
        <Route path={`/Privacy`} element={<Layout><Privacy /></Layout>} />

        <Route path={`/Coordinate`} element={<Layout><Coordinate /></Layout>} />
        <Route path={`/Offer`} element={<Layout><Offer /></Layout>} />
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
// <header />
// {children}
// <footer />
// )
// }