import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
// import App from './App.js'
import MAIN from './components/Lv4_page/Main.jsx'
import UserGuide from  './components/Lv4_page/UserGuide.jsx'

const Pager = () => {
    return (
     <BrowserRouter>
        <Link to="/" className="App-link">
          View Package Summary
        </Link>
        <Routes>
          <Route path={`/`} element={<MAIN />} />
          {/* <Route path={`/main`} element={<MAIN />} /> */}
          <Route path={`/UserGuide/`} element={<UserGuide />} />
          {/* <Route path={`/Page404/`} element={<Page404 />} /> */}
          {/* <Route path="*"><Page404 /></Route> */}
        </Routes>
      </BrowserRouter>
    );
}

export default Pager;