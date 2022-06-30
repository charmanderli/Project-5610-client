import React from "react";
import SharedLayout from "./SharedLayout";
import { useState, useEffect } from "react";

export default function Joke() {
  const [joke, setJoke] = useState([]);
  // const [showButton, setShowButton] = useState(true);
  // api === "/api/posts" ? setShowButton(false) : setShowButton(true);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://icanhazdadjoke.com/`, {
          method: "GET",
          headers: { Accept: "application/json" },
        });

        if (!res.ok) {
          throw Error("fetch failed");
        }
        const data = await res.json();
        setJoke(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);
  return (
    <>
      <h3>Dad joke of the day</h3>
      <p>{joke.joke}</p>
    </>
  );
}
