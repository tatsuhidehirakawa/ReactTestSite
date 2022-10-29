import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import App from './App.js'
import MAIN from './components/tmps/Main.jsx'
import Products from  './components/tmps/Products.jsx'
import UserGuide from  './components/tmps/UserGuide.jsx'
import Agreement from  './components/tmps/Agreement.jsx'
import Pricing from  './components/tmps/Pricing.jsx'
import Privacy from  './components/tmps/Privacy.jsx'
import ContactUs from  './components/tmps/ContactUs.jsx'
import Company from  './components/tmps/Company.jsx'
import Page404 from  './components/tmps/Page404.jsx'

const Pager = () => {
    return (
     <BrowserRouter>
        <Link to="/" className="App-link">View Package Summary</Link>
        <Link to="/Products" className="App-link">Products</Link>
        <Link to="UserGuide" className="App-link">UserGuide</Link>
        <Link to="/Agreement" className="App-link">Agreement</Link>
        <Link to="/Pricing" className="App-link">Pricing</Link>
        <Link to="/Privacy" className="App-link">Privacy</Link>
        <Link to="/ContactUs" className="App-link">ContactUs</Link>
        <Link to="/Company" className="App-link">Company</Link>
        <Link to="/Page404" className="App-link">Page404</Link>
        <Routes>
          <Route path={`/`} element={<MAIN />} />
          <Route path={`/Products/`} element={<Products />} />
          <Route path={`/UserGuide/`} element={<UserGuide />} />
          <Route path={`/Agreement/`} element={<Agreement />} />
          <Route path={`/Pricing/`} element={<Pricing />} />
          <Route path={`/Privacy/`} element={<Privacy />} />
          <Route path={`/ContactUs/`} element={<ContactUs />} />
          <Route path={`/Company/`} element={<Company />} />
          <Route path={`*`} element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    );
}

export default Pager;