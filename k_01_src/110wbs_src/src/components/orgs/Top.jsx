import React from "react"
import "./Top.scss"

const Top = () => {
  return (
    <div className="OutlineA">
      <div className="InlineA">
      <p className="TestPageTextA">- Main -</p>
      <div className="TestPageTextB"></div>
      <div className="TestPageTextB"></div>
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
      <div className="TestPageTextB"></div>
      <div className="TestPageTextB"></div>
      <div className="TestPageTextB"></div>
      </div>
    </div>
  )
}

export default Top;