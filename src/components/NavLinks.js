import links from "../utils/links";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { IoBarChartSharp } from "react-icons/io5";

export default function NavLinks() {
  const { user } = useAuth0();
  return (
    <div className="nav-links">
      <NavLink
        to={`/myposts/${user.email}`}
        key={1}
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
      >
        <span className="icon">
          <IoBarChartSharp />
        </span>
        My posts
      </NavLink>
      {links.map((link) => {
        const { text, path, id, icon } = link;
        return (
          <NavLink
            to={path}
            key={id}
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
