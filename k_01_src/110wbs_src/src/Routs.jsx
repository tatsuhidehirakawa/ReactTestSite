import React from 'react'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import MAIN from  './components/Lv4_page/Main.jsx'

const Routs = () => {
    return (

     <BrowserRouter>
        <Link to="/ViewPackageSummary" className="App-link">
          View Package Summary
        </Link>
        <Routes>
          <Route path="/ViewPackageSummary" element={<MAIN />} />
          <Route path="*">{/* <Page404 /> */}</Route>
        </Routes>
      </BrowserRouter>
    );
}

export default Routs;