import React from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

export default function BigSidebar() {
  return (
    <Wrapper>
      <div className="content">
        <header>
          <Logo />
        </header>
        <NavLinks />
      </div>
    </Wrapper>
  );
}
