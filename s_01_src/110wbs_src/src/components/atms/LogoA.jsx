import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../logo.svg';
import './LogoA.scss';

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