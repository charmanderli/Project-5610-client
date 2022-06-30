import React from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft } from "react-icons/fa";

import LogoutButton from "./LogoutButton";
import { useAppContext } from "../context/appContext";

export default function Navbar() {
  const { toggleSidebar } = useAppContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button
          aria-label="toggle side bar"
          className="toggle-btn"
          onClick={toggleSidebar}
        >
          <FaAlignLeft />
        </button>
        <div>
          <h3 className="logo-text"> Dashboard </h3>
        </div>

        {/* {isAuthenticated ? <LogoutButton /> : <LoginButton />} */}
        <LogoutButton />
      </div>
    </Wrapper>
  );
}
