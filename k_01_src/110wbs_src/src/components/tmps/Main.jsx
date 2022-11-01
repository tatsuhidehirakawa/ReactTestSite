import React from "react";
import Header from "../orgs/Header";
// import Wrapper from "../orgs/Wrapper";
import Footer from "../orgs/Footer";
import './Main.scss';

const Main = ({children}) => {
  return (
    <div className="bbb">
      <p className="Main_text_a">- Main -</p>
      <Header />
      <Footer />
      {children}
    </div>
  );
}
export default Main;
