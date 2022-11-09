import React from "react"
import "./SiteTop.scss"
import ApiFetch from '../../hooks/ApiFetch.jsx';

const SiteTop = () => {
  return (
    <div className="page--outline">
      <div className="page--inlineA">
      <p className="page__textA">- <b>SiteTop</b> -</p>
      <div className="page__textS"></div>
      <div className="page__textS"></div>
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
      <div className="page__textS"></div>
      <div className="page__textS"></div>
      <div className="page__textS"></div>
      <ApiFetch />
      <div className="page__textS"></div>
      <div className="page__textS"></div>
      <div className="page__textS"></div>
      <div className="page__textS"></div>
      <p className="page__textA">- <b>SiteTop</b> -</p>
      </div>
    </div>
  )
}

export default SiteTop;