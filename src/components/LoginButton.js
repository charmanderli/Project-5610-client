import React from "react";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="btn-container">
      <button
        aria-label="Login button"
        type="button"
        className="btn"
        onClick={loginWithRedirect}
      >
        <FaUserCircle />
        Login/Register
        <FaCaretDown />
      </button>
    </div>
  );
}
