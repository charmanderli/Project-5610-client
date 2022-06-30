import React from "react";

import HeartButton from "./HeartButton";
export default function Post({ post }) {
  // let postBody = post.body;
  // post.body.length >= 200
  //   ? (postBody = postBody.slice(0, 200))
  //   : (postBody = post.body);

  return (
    <div className="postContainer">
      <div className="postImg"></div>
      <div className="textPost">
        <p className="city">{post.city}</p>
        <p className="userId">{post.userId}</p>
        <p className="postBody">{post.body}...</p>
        <HeartButton />
        <button className="btn">{post.section}</button>
      </div>
    </div>
  );
}
