import React from 'react';
import './Logo.scss';
import '../../Logo.svg';

const Logo = () => {
  return (
    <div className="logoOutline">
      <div className="logoInline" onClick={onClick}>
        {children}
      </div>
    </div>
  );
}
export default Logo;