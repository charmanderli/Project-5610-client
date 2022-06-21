import React, { useEffect, useState } from "react";
import Post from "./Post";
import {Link} from "react-router-dom";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("http://localhost:5000/posts");
        if (!res.ok) {
          throw Error("fetch failed");
        }
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  return posts.length > 0 ? (
    <>
      {posts.map((item) => (
        <div>
          <Link to={`/posts/${item._id}`} className="btn">
            Edit
          </Link>
          <Post key={item._id} post={item} />
        </div>
      ))}
    </>
  ) : (
    <li>nothing here!</li>
  );
}
