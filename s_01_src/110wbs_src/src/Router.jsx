import React from 'react';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import GateLayout from  './components/tmps/GateLayout.jsx';
// --- MainLayout ---------------------------------------------
import MainLayout from './components/tmps/MainLayout.jsx';
import Page404 from  './components/orgs/Page404.jsx';
// import TestPage from './components/orgs/TestPage.jsx';
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
// --- MapLayout ---------------------------------------------  
import MapLayout from './components/tmps/MapLayout.jsx';
// import { MapLayout, abc, def, ghi } from './components/tmps/MapLayout.jsx';
// import Mapper from  './components/atms/Mapper.jsx';
import Coordinate from  './components/orgs/Coordinate.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<GateLayout/>} />
        {/* <Route path={`/`} element={<http://www.sample.com/landingpage.html>} /> */}  {/* Change CORS setting sat API*/}
        <Route path={`*`} element={<MainLayout><Page404 /></MainLayout>} />

        <Route path={`/News`} element={<MainLayout><News /></MainLayout>} />
        <Route path={`/Products`} element={<MainLayout><Products /></MainLayout>} />
        {/* <Route path={`/TestPage`} element={<MainLayout><TestPage /></MainLayout>} /> */}
        <Route path={`/Pricing`} element={<MainLayout><PricingContent /></MainLayout>} />

        <Route path={`/Agreement`} element={<MainLayout><Agreement /></MainLayout>} />
        <Route path={`/UserGuide`} element={<MainLayout><UserGuide /></MainLayout>} />
        <Route path={`/SignUp`} element={<MainLayout><SignUp /></MainLayout>} />
        <Route path={`/SignIn`} element={<MainLayout><SignIn /></MainLayout>} />
        <Route path={`/MyPage`} element={<MainLayout><MyPage /></MainLayout>} />
        <Route path={`/Contact`} element={<MainLayout><Contact /></MainLayout>} />
        <Route path={`/Recruit`} element={<MainLayout><Recruit /></MainLayout>} />
        <Route path={`/Company`} element={<MainLayout><Company /></MainLayout>} />
        <Route path={`/Privacy`} element={<MainLayout><Privacy /></MainLayout>} />
        <Route path={`/Offer`} element={<MainLayout><Offer /></MainLayout>} />

        <Route path={`map/*`} element={<MapLayout />} />
          <Route path={`SiteTop`} element={<SiteTop />} />
          <Route path={`Coordinate`} element={<Coordinate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;





// <Route path="/" element={<Main>landingcomp</App>}>

// <Route path="/main" element={<Main>product</Main>}>
// <Route path="/other" element={<Main>other</Main>}></Route>

