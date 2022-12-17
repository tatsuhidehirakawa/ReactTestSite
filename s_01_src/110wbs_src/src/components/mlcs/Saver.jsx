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

const fetchUsers = async () => {
  const res = await fetch('http://localhost:8080/accountAttribute/someGet');
  return res.json();
};

const Saver = () => {

  const { data,isLoading } = useQuery('users', fetchUsers);

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return (
    <div className="card--outline nonscrollbar content::-webkit-scrollbar" css={outline}>
      {data.map((user) => {
        return (
          <Card
            link={"../Offer"}
            image={user.rate.String}
            // introduction={productItem.introduction}
            name={user.self_introduction.String}
            location={user.facebook_uri.String}
            distance={user.twitter_uri.String}
            introduction={user.skill.String}
          />
        );
      })}
    </div>
  )
}

export default Saver;
