import React from "react";
import { Link } from "react-router-dom";

export default function ReadButton({ item, myPost }) {
  console.log(myPost);
  return (
    <div>
      <Link to={`/posts/${item._id}`} className="btn" myPost={myPost}>
        Read
      </Link>
    </div>
  );
}
