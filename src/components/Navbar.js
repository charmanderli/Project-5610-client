import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft } from "react-icons/fa";
import Logo from "./Logo";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import { useState } from "react";

export default function Navbar() {
  const { isAuthenticated } = useAuth0();
  const [showMenu, setShowMenu] = useState();
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          aria-label="toggle side bar"
          className="toggle-btn"
          onClick={() => setShowMenu(!showMenu)}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text"> dashboard</h3>
        </div>
        {/* {isAuthenticated ? <LogoutButton /> : <LoginButton />} */}
        <LogoutButton />
      </div>
    </Wrapper>
  );
}
