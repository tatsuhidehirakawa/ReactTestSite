/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import React from "react"
import Card from "../mlcs/Card";
// import Pic from "../atms/Pic";
import React, { useState, useEffect } from 'react';
// import useFetch from '../../hooks/useFetch';
// import { Mapper } from "../atms/Mapper";
import { useQuery } from 'react-query';

const inlineB_text = css`
  font-size: 21px;
  color: rgb(255, 255, 255);
  filter: drop-shadow(3px 3px 9px rgba(0,0,0,0.6));
  font-weight: bolder;
  text-align: left;
  padding: 12px 0px 8px 33px;
  width: 100vh;
  z-index: 3;
`;

const sitetop_outline = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: absolute;
  padding: 0px 0px 237px 0px;
`;

const sitetop_inline = css`
  background: rgba(115, 255, 277, 0.3);
  display: flex;
  flex-direction: column;
`;

const inlineA_text = css`
  filter: drop-shadow(3px 3px 9px rgba(0,0,0,0.6));
  width: 100%;
  height: 245px;
  margin: 17px 10px 38px 50px;
  text-align: left;
  font-size: 50px;
  color: white;
`;

const tile_sitetop = css`
  display: flex;
  filter: drop-shadow(3px 3px 9px rgba(0,0,0,0.6));
  margin: 0px 0px 0px 0px;
  padding: 10px 0px 0px 0px;
  // overflow-y: scroll;        // Disable scroll bar.
  // -ms-overflow-style: none;  // Disable scroll bar.
  // scrollbar-width: none;     // Disable scroll bar.
`;

// React-Query ------------------------------------------------------
const fetchUsers = async () => {
  const res = await fetch('http://localhost:8080/offerList/someGet');
  return res.json();
}; // ---------------------------------------------------------------

const SiteTop = () => {

  // React-Query-------------------------------------------
  const { data,isLoading } = useQuery('users', fetchUsers);
  if (isLoading) {
    return <span>Loading...</span>;
  } // ----------------------------------------------------

  console.log(data)

  return (
    <div className="sitetop--outline" css={sitetop_outline}>
      <div className="sitetop--inline" css={sitetop_inline}>
        <div className="sitetop--inlineA--text" css={inlineA_text}>
          <p style={{fontSize: `90px`}}>Main Title</p><p>Subtitle</p>
        </div>
        <div className="sitetop--inlineB--text" css={inlineB_text}>
          <p>人気急上昇のメンバー</p>
        </div>
        <div className="sitetop--inlineC--tiling" css={tile_sitetop}>
          {data.map((user) => {
          return (
          // {data.filter((post, index) => {
          // return index.Slice(0, 5)(
            // <div>{post.account_id}</div>
              <Card
                link={"../Coordinate"}
                image={user.offer_catagory.String}
                // introduction={productItem.introduction}
                name={user.offer_text}
                location={user.offer_location.String}
                distance={user.offer_severity.String}
                introduction={user.offer_title.String}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default SiteTop;
