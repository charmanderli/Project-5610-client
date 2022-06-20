import React from "react";

import main from "../assets/images/main.jpg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";
export default function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            local <span>guide</span> forum
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus
            nobis sint quo rem quaerat eius dolor, ea illum fuga saepe vel
            delectus ab quisquam inventore, nemo ratione aut? Dolorum, placeat.
          </p>
          <Link to="/register" className="btn btn-hero">
            Login/Register
          </Link>
        </div>
        <img src={main} alt="main page img" className="img main-img" />
      </div>
    </Wrapper>
  );
}
