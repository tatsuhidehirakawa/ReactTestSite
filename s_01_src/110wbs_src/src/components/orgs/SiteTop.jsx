import React from "react"
import "./SiteTop.scss"
import ApiFetch from '../../hooks/ApiFetch.jsx';

const SiteTop = () => {
  return (
    <div className="SiteTop--outline">

      <div className="SiteTop--inlineA">
      {/* <p className="SiteTop__textA">- <b>SiteTop</b> -</p> */}
      <div className="SiteTop--inlineA--boxA__pictureA">
      </div>
      <div className="SiteTop--inlineA--boxB__textA">
          <p className="sss">
          AAAAAAAAAAAAAA
          AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
          </p>
      </div>
      </div>

      <div className="SiteTop--inlineB">
        <div className="SiteTop--inlineB--boxA__pictureA">
          <p>
            Technology stack:<br />
            Frontend: React.js, TypeScript, Sass<br />
            Backend: Golang(Gin,sqlc), PostgreSQL<br />
            <b>Dev</b>lopment environment: Docker<br />
            <b>T</b>e<b>st</b> Environment: CircleCI, Docker(Multistage Build)<br />
            <b>St</b>a<b>g</b>ing Environment: Terraform
          </p>
        </div>
        <div className="SiteTop--inlineB--boxB__textA">
          <div className="SiteTop__textS"></div>
          <div className="SiteTop__textS"></div>
          <div className="SiteTop__textS"></div>
          <ApiFetch />
          <div className="SiteTop__textS"></div>
          <div className="SiteTop__textS"></div>
          <div className="SiteTop__textS"></div>
          <div className="SiteTop__textS"></div>
        </div>

      </div>
      <div className="SiteTop--inlineC__pictureA">
        </div>
    </div>
  );
}

export default SiteTop;