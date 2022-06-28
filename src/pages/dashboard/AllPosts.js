import React from "react";
import { PostList } from "../../components";

export default function AllPosts() {

  return (
    <div>
      <PostList api="/api/posts" />
    </div>
  );
}
