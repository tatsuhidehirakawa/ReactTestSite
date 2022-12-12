// import React from "react"
import Card from "../atms/Card";
import React, { useState, useEffect } from 'react';
import './Saver.scss';

const Saver = () => {

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
    <div className="content::-webkit-scrollbar nonscrollbar z_index w-[240px] mb-[237px] p-[10px] absolute left-[163px] h-screen fixed top-1/2">
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