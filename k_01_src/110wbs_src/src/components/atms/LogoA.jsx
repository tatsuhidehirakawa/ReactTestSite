import React from 'react';
import { Link } from "react-router-dom";
import './LogoA.scss';
import logo from '../../logo.svg';

const LogoA = () => {
  return (
    <div className="logoOutline">
      <Link to="/SiteTop">
      <img src={logo} className="logoInline" alt="logo" />
      </Link>
    </div>
  );
}

export default LogoA;