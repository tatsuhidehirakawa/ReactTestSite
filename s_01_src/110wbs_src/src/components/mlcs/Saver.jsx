/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import React from "react"
import Card from "./Card";
import { useQuery } from 'react-query';

const outline = css`
  z-index: 5;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  position: absolute;
  // position: fixed;
  height: 82vh;
  width: 240px;
  top: 45%;
  left: 163px;
  // height: 100%;
  margine-bottom: 237px;
  padding: 10px;
`;

// React-Query ------------------------------------------------------
const fetchUsers = async () => {
  const res = await fetch('http://localhost:8080/offerList/someGet');
  return res.json();
}; // ---------------------------------------------------------------

const Saver = () => {

  // React-Query-------------------------------------------
  const { data,isLoading } = useQuery('users', fetchUsers);
  if (isLoading) {
    return <span>Loading...</span>;
  } // ----------------------------------------------------
 
  console.log(data)

  return (
    <div className="card--outline nonscrollbar content::-webkit-scrollbar" css={outline}>
      {data.map((user, index) => {
        return (
            <Card
              // key={index.account_id}
              link={"../Offer"}
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
  )
}

export default Saver;
