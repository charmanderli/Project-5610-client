import React from "react";
import { PostList } from "../../components";
import { useAuth0 } from "@auth0/auth0-react";

export default function MyPosts() {
  const { user } = useAuth0();

  return (
    <div>
      <PostList api={`/api/posts/myposts/${user.email}`} />
    </div>
  );
}
