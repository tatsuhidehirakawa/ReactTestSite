import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom';
import MAIN from '../components/Lv4_page/Main.jsx';
// import Page404 from '../components/Lv4_page/Page404.jsx';

const PageControl = () => {
    return (
        <BrowserRouter>
        <Link to='/ViewPackageSummary' className='App-link'>View Package Summary</Link>
        <Route path="./components/Lv4_page/Main.jsx">
            <MAIN />
        </Route>
        <Route path="*">
            <Page404 />
        </Route>
        </BrowserRouter>
    );
}
export default PageControl;