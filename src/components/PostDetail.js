import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Post from "./Post";

export default function PostDetail() {
  const { _id } = useParams();
  const postId = _id;
  const [post, setPost] = useState([]);

  async function deletePost(deletedId) {
    try {
      const res = await fetch(`http://localhost:5000/posts/${deletedId}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw Error("delete failed");
      }
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function fetchPost() {
      try {
        console.log(postId);
        const res = await fetch(`http://localhost:5000/posts/${postId}`);
        if (!res.ok) {
          throw Error("fetch failed");
        }
        const data = await res.json();
        setPost(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchPost();
  }, [postId]);

  return (
    <>
      <Post key={postId} post={post} />
      <Link to={`/posts/${postId}/edit`} className="btn">
        Edit
      </Link>

      <button
        className="btn btn-hipster"
        onClick={() => {
          deletePost({ postId });
        }}
      >
        Delete
      </button>
    </>
  );
}
