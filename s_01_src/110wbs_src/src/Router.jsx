import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
// --- LandingPageLayout ----------------------------------------------------
import LandingPageLayout from  './components/tmps/LandingPageLayout.jsx';
// --- TopPageLayout --------------------------------------------------------
import TopPageLayout from './components/tmps/TopPageLayout.jsx';
import SiteTop from  './components/orgs/SiteTop.jsx';
// --- MapPageLayout --------------------------------------------------------
import MapPageLayout from './components/tmps/MapPageLayout.jsx';
// import { MapLayout, abc, def, ghi } from './components/tmps/MapLayout.jsx';
// import Mapper from  './components/atms/Mapper.jsx';
import Coordinate from  './components/orgs/Coordinate.jsx';
// --- CommonLayout ---------------------------------------------------------
import CommonLayout from './components/tmps/CommonLayout.jsx';
import Page404 from  './components/orgs/Page404.jsx';
// import TestPage from './components/orgs/TestPage.jsx';
import News from './components/orgs/News.jsx';
// import Products from  './components/orgs/Products.jsx';
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
import Offer from  './components/orgs/Offer.jsx';
import Csstest from  './components/orgs/Csstest.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<LandingPageLayout/>} />
        {/* <Route path={`/`} element={<http://www.sample.com/landingpage.html>} /> */}  {/* Change CORS setting sat API*/}
        <Route path={`*`} element={<CommonLayout><Page404 /></CommonLayout>} />

        <Route path={`/sitetop`} element={<TopPageLayout><SiteTop /></TopPageLayout>} />

        <Route path={`/coordinate`} element={<MapPageLayout><Coordinate /></MapPageLayout>} />

        <Route path={`/news`} element={<CommonLayout><News /></CommonLayout>} />
        <Route path={`/products`} element={<CommonLayout><Csstest /></CommonLayout>} />
        {/* <Route path={`/TestPage`} element={<CommonLayout><TestPage /></CommonLayout>} /> */}
        <Route path={`/pricing`} element={<CommonLayout><PricingContent /></CommonLayout>} />
        <Route path={`/agreement`} element={<CommonLayout><Agreement /></CommonLayout>} />
        <Route path={`/userguide`} element={<CommonLayout><UserGuide /></CommonLayout>} />
        <Route path={`/signup`} element={<CommonLayout><SignUp /></CommonLayout>} />
        <Route path={`/signin`} element={<CommonLayout><SignIn /></CommonLayout>} />
        <Route path={`/mypage`} element={<CommonLayout><MyPage /></CommonLayout>} />
        <Route path={`/contact`} element={<CommonLayout><Contact /></CommonLayout>} />
        <Route path={`/recruit`} element={<CommonLayout><Recruit /></CommonLayout>} />
        <Route path={`/company`} element={<CommonLayout><Company /></CommonLayout>} />
        <Route path={`/privacy`} element={<CommonLayout><Privacy /></CommonLayout>} />
        <Route path={`/offer`} element={<CommonLayout><Offer /></CommonLayout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;





// <Route path="/" element={<Main>landingcomp</App>}>

// <Route path="/main" element={<Main>product</Main>}>
// <Route path="/other" element={<Main>other</Main>}></Route>

