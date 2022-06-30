import links from "../utils/links";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { SiFoodpanda } from "react-icons/si";
import { useAppContext } from "../context/appContext";

export default function NavLinks() {
  const { user } = useAuth0();
  const { toggleSidebar } = useAppContext();
  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, id, icon } = link;
        return (
          <NavLink
            to={path}
            key={id}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
}
