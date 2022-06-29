import React from "react";
import Wrapper from "../assets/wrappers/BigSidebar";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import links from "../utils/links";
import { NavLink } from "react-router-dom";
import { FaAlignLeft } from "react-icons/fa";
import { useState } from "react";
import { useAppContext } from "../context/appContext";

export default function BigSidebar() {
  const [showMenu, setShowMenu] = useState();
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <header >
            <Logo />
          </header>

          <NavLinks />
        </div>
      </div>
    </Wrapper>
  );
}
