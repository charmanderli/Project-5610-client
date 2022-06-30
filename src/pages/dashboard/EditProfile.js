import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/DashboardFromPage";
import { FormRow, FormRowSelect } from "../../components";
import { useNavigate } from "react-router-dom";

export default function EditProfile() {
  const { user } = useAuth0();
  const userId = user.email;

  const [username, setUsername] = useState("");
  const [city, setCity] = useState("");
  const [bio, setBio] = useState("");

  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // const newPost = {
    //   title: title,
    //   userId: userId,
    //   city: city,
    //   section: section,
    //   body: body,
    // };
    const newUser = {
      userId: userId,
      username: username,
      city: city,
      bio: bio,
    };

    console.log(JSON.stringify(newUser));

    try {
      const res = await fetch(`/api/profile/${userId}`, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newUser),
      });
      if (!res.ok) {
        throw Error("post failed");
      }
      const data = await res.json();
      navigate("/profile", { replace: true });
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Wrapper>
      <div>
        <img src={user.picture} alt="user" />
      </div>
      <Link to="/profile" className="btn">
        Go back
      </Link>
      <form onSubmit={handleSubmit} className="form">
        <h3>My Profile</h3>
        <div className="form-center">
          <FormRow type="text" name="userId" readonly value={userId} />
          <FormRow
            type="text"
            name="username"
            value={username}
            handleChange={(e) => setUsername(e.target.value)}
          />
          <FormRow
            type="text"
            name="city"
            value={city}
            handleChange={(e) => setCity(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor={"bio"} className="form-label">
            bio
          </label>
          <input
            className="form-input textbox"
            id="bio"
            type="text"
            value={bio}
            name="bio"
            onChange={(e) => setBio(e.target.value)}
          />
        </div>

        <div className="btn-container">
          <button className="btn btn-block submit-btn" type="submit">
            submit
          </button>
        </div>
      </form>
    </Wrapper>
  );
}
