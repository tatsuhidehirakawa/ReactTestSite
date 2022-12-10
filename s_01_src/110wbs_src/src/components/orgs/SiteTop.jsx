// import React from "react"
import Card from "../atms/Card";
import "./SiteTop.scss"
// import ApiFetch from "../../hooks/ApiFetch";
import React, { useState, useEffect } from 'react';
// import FloatingActionButton from '../atms/FloatingActionButton'
// import useFetch from '../../hooks/useFetch';
import { Mapper } from "../atms/Mapper";


const SiteTop = () => {
  // const [data, setData] = useState({ hits: [] });
  const [posts, setPosts] = useState([])
  useEffect(() => {
    // console.log('ApiFetch.jsx: useEffect()')   // Debug.
    // fetch('https://jsonplaceholder.typicode.com/posts', {method: 'GET'})
    // fetch('http://localhost:8080/somePost', {method: 'GET'})
    // fetch('http://host.docker.internal:8080/somePost', {method: 'GET'})
    // fetch('http://host.docker.internal:8080/someGet', {method: 'GET'})   // Docker for Mac 18.03 and Windows10
    // fetch('http://docker.for.mac.host.internal:8080/someGet', {method: 'GET'})   // Docker for Mac 17.12
    fetch('http://docker.for.mac.localhost:8080/accountAttribute/someGet', {method: 'GET'})   // Docker for Mac 17.06
    .then(res => res.json())
    .then(data => {
      setPosts(data)
      // console.log(data)
      })
      // .catch(err => {   // Debug.
      //     console.log('ApiFetch.jsx: useEffect(): err: ', err)
      // });
  },[])
 
  return (
    <div className="main-wrapper relative w-full z-3 absolute">
            <Mapper />

      {/* <FloatingActionButton /> */}
      <div className="main">
        <div className="sitetop--inline">
          {posts.map((post) => {
            return (
                <Card
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
      </div>
    </div>
  );
}

export default SiteTop;
