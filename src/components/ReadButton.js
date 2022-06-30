import React from "react";
import { Link } from "react-router-dom";

export default function ReadButton({ item }) {
  return (
    <div>
      <Link to={`/posts/${item._id}`} className="btn">
        Read
      </Link>
    </div>
  );
}
