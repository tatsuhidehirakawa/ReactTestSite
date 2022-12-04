import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../logo.svg';
import './LogoA.scss';

const LogoA = () => {
  return (
    <div className="logoOutline">
      <Link to="/SiteTop">
        <img src={logo} className="logoInline" alt="logo" />
        {/* <img src={logo} className="h-12" alt="logo" /> */}
      </Link>
    </div>
  );
}

export default LogoA;

// import React from 'react';
// import { Link } from "react-router-dom";
// // import { jsx, css } from "@emotion/react";
// import { css } from "@emotion/react";
// import logo from '../../logo.svg';

// const LogoA = () => {

//   const logooutlineStyle = css({
//     fill: `#fff`,
//     stroke: `#000`,
//     // stroke-width: `0.5`,
//   })

//   const logoinlineStyle = css({
//     height: `57px`,
//     // margin: `3px 4px 4px 4px`,
//   })

//   return (
//     <div css={logooutlineStyle}>
//       <Link to="/SiteTop">
//         <img src={logo} css={logoinlineStyle} alt="logo" />
//       </Link>
//     </div>
//   );
// }

// export default LogoA;

