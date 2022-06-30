import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";

export default function Profile() {
  const { user } = useAuth0();
  const userId = user.email;

  const [profile, setProfile] = useState("");

  useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch(`/api/profile/${userId}`);
        if (!res.ok) {
          throw Error("fetch failed");
        }
        const data = await res.json();
        setProfile(data);
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchUser();
  }, [userId]);
  return (
    <>
      <div>
        <img src={user.picture} alt="user" />
      </div>
      <Link to="/profile/edit" className="btn">
        Edit
      </Link>
      <h3>My Profile</h3>
      <h5>username</h5>
      {profile ? (
        <p>{profile.name} </p>
      ) : (
        <p>Mysterious person, nothing here</p>
      )}

      <h5>userId</h5>
      <p> {user.email}</p>
      <h5>lives in</h5>
      {profile ? <p>{profile.name} </p> : <p>Somewhere on the planet</p>}
      <h5>About me</h5>
      {profile ? (
        <p>{profile.bio} </p>
      ) : (
        <p>Too lazy to write something here</p>
      )}
    </>
  );
}
