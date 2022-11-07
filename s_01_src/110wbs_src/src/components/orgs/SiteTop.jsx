import React from "react"
import "./SiteTop.scss"
import ApiFetch from '../../hooks/ApiFetch.jsx';

const SiteTop = () => {
  return (
    <div className="PageOutline">
      <div className="PageInlineA">
      <p className="PageTextA">- <b>SiteTop</b> -</p>
      <div className="PageTextS"></div>
      <div className="PageTextS"></div>
      <p>
        This Packege is <b>fullstack</b> Web development <b>environment</b> named "<b>STGprd</b>".<br />
        "<b>STGprd</b>" is made by Golang, PostgreSQL, React, TypeScript, Sass & Docker.<br />
        If you want to use this packege, please access "<b>https://github.com/tatsuhidehirakawa/myportfolio_k</b>".
      </p>
      <p>
        Technology stack:<br />
        Frontend: React.js, TypeScript, Sass<br />
        Backend: Golang(Gin,sqlc), PostgreSQL<br />
        <b>Dev</b>lopment environment: Docker<br />
        <b>T</b>e<b>st</b> Environment: CircleCI, Docker(Multistage Build)<br />
        <b>St</b>a<b>g</b>ing Environment: Terraform
      </p>
      <div className="PageTextS"></div>
      <div className="PageTextS"></div>
      <div className="PageTextS"></div>
      <ApiFetch />
      <div className="PageTextS"></div>
      <div className="PageTextS"></div>
      <div className="PageTextS"></div>
      <div className="PageTextS"></div>
      <p className="PageTextA">- <b>SiteTop</b> -</p>
      </div>
    </div>
  )
}

export default SiteTop;