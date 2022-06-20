import React from "react";
import SearchBar from "../components/SearchBar";
import PostList from "./PostList";

export default function Banner() {
  return (
    <>
      <div className="Banner">
        <SearchBar />
      </div>
      <PostList />
    </>
  );
}