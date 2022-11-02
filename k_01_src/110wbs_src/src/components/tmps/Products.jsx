import React from "react"
import ApiFetch from '../../hooks/ApiFetch.jsx';
import "./Products.scss"

const Products = () => {
  return (
    <div className="productsPageOutline">
      {/* <img src="hiyoko.svg" className="icon-beginner" /> */}
      <p className="Products_text_a">- Products -</p>
      <div className="templete_text"></div>
      <div className="templete_text"></div>
      <div className="templete_text"></div>
      <ApiFetch />
      <div className="templete_text"></div>
      <div className="templete_text"></div>
      <div className="templete_text"></div>
      <div className="templete_text"></div>
    </div>
  )
}

export default Products;