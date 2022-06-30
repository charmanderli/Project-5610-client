import React from "react";
import { BiHeart } from "react-icons/bi";
import { useState } from "react";
import { AiFillHeart } from "react-icons/ai";

export default function HeartButton() {
  const [heart, setHeart] = useState(false);
  async function hearted() {
    setHeart(!heart);
  }
  return (
    <button className="btn" onClick={hearted}>
      {heart ? <AiFillHeart /> : <BiHeart />}
    </button>
  );
}
