/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
// import React from "react"
import Card from "./Card";
import React, { useState, useEffect } from 'react';
import './Saver.scss';

const Saver = () => {

  // <div className="w-[240px] mb-[237px] p-[10px] absolute left-[163px] h-screen fixed top-1/2" css={z_index}>

const outline = css`
    z-index: 5;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    position: absolute;
    // position: fixed;
    height: 100vh;
    width: 240px;
    top: 50%;
    left: 163px;
    height: 100%;
    margine-bottom: 237px;
    padding: 10px;
  `;

  // const scrollbar = css`
  //   @include purgescrollbar;
  // `;

      // const [data, setData] = useState({ hits: [] });
  const [posts, setPosts] = useState([])
  const url = 'http://docker.for.mac.localhost:8080/accountAttribute/someGet'
  useEffect(() => {
    fetch( url, {method: 'GET'})
    .then(res => res.json())
    .then(data => {
      setPosts(data)
      console.log(data)
      })
      // .catch(err => {   // Debug.
      //     console.log('ApiFetch.jsx: useEffect(): err: ', err)
      // });
  },[])

  return (
    <div className="card--outline nonscrollbar content::-webkit-scrollbar" css={outline}>
          {posts.map((post) => {
            return (
                <Card
                  link={"../Offer"}
                  image={post.rate.String}
                  // introduction={productItem.introduction}
                  name={post.self_introduction.String}
                  location={post.facebook_uri.String}
                  distance={post.twitter_uri.String}
                  introduction={post.skill.String}
                />
            );
          })}
    </div>
)
}

export default Saver;



    // console.log('ApiFetch.jsx: useEffect()')   // Debug.
// https://jsonplaceholder.typicode.com/posts
// http://localhost:8080/somePost
// http://host.docker.internal:8080/somePost
// http://host.docker.internal:8080/someGet   // Docker for Mac 18.03 and Windows10
// http://docker.for.mac.host.internal:8080/someGet   // Docker for Mac 17.12
// http://docker.for.mac.localhost:8080/accountAttribute/someGet    // Docker for Mac 17.06