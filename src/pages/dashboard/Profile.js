import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const { user } = useAuth0();

  return (
    <div>
      <img src={user.picture} alt="user" />
      <p>{user.email}</p>
    </div>
  );
}
