import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../logo.svg';

const LogoA = () => {
  return (
      <Link to="/SiteTop">
        <img src={logo} className="h-14" alt="logo" />
      </Link>
  );
}

export default LogoA;
