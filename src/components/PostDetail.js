import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Post from "./Post";

export default function PostDetail({ myPost }) {
  const { _id } = useParams();
  const postId = _id;
  const [post, setPost] = useState([]);
  let navigate = useNavigate();

  async function deletePost(deletedId) {
    console.log(postId);
    try {
      const res = await fetch(`/api/posts/${deletedId}`, {
        method: "DELETE",
      });
      if (!res.ok) {
        throw Error("delete failed");
      }
      const data = await res.json();
      navigate("/posts");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function fetchPost() {
      try {
        console.log(postId);
        const res = await fetch(`/api/posts/${postId}`);
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
      <Link to="/posts" className="btn">
        Go Back
      </Link>
      <Link to={`/posts/${postId}/edit`} className="btn">
        Edit
      </Link>

      <button
        className="btn btn-hipster"
        onClick={() => {
          deletePost(postId);
        }}
      >
        Delete
      </button>
      <h2>{post.title}</h2>

      <Post key={postId} post={post} />

      <></>
    </>
  );
}
