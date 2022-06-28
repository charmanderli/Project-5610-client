import React from "react";
import { Link } from "react-router-dom";

export default function EditButton({item}) {
  return (
    <div>
      <Link to={`/posts/${item._id}`} className="btn">
        Edit
      </Link>
  
    </div>
  );
}
