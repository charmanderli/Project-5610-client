import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/not-found.jpg";
import Wrapper from "../assets/wrappers/ErrorPage";

export default function Error() {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={img} alt="not found" />
        <h3>Oops! Page not found</h3>
        <p>We cannot find the page you are looking for</p>
        <Link to="/">Back home</Link>
      </div>
    </Wrapper>
  );
}
