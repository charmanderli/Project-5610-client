import React, { useEffect, useState } from "react";
import Post from "./Post";
import { Link } from "react-router-dom";
import ReadButton from "./ReadButton";

export default function PostList({ api}) {
  const [posts, setPosts] = useState([]);
  // const [showButton, setShowButton] = useState(true);
  // api === "/api/posts" ? setShowButton(false) : setShowButton(true);
  useEffect(() => {
    async function fetchData() {
      try {
        console.log(api);
        const res = await fetch(api);

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
  }, [api]);

  return posts.length > 0 ? (
    <>
      {posts.map((item) => (
        <div>
          <ReadButton item={item}/>

          <Post key={item._id} post={item} />
        </div>
      ))}
    </>
  ) : (
    <li>nothing here!</li>
  );
}
