import React from "react";
import Header from "../orgs/Header";
// import Wrapper from "../orgs/Wrapper";
import Footer from "../orgs/Footer";
import './Main.scss';

const Main = ({children}) => {
  return (
    <div className="aaa">
      <p className="Main_text_a">Welcome to the "<code>STGprd_devpkg</code>" - Ver 0.3.0.0</p>
      <Header />
      <Footer />
      {children}
    </div>
  );
}
export default Main;
