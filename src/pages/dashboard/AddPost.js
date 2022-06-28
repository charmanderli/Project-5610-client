import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../../assets/wrappers/DashboardFromPage";
import { FormRow, FormRowSelect } from "../../components";
import { useAuth0 } from "@auth0/auth0-react";

export default function AddPost({ isEditing }) {
  const { user } = useAuth0();
  const userId = user.email;
  const [title, setTitle] = useState("");
  const [city, setCity] = useState("");
  const [section, setSection] = useState("");
  const [body, setBody] = useState("");

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
    const newPost = {
      userId: userId,
      title: title,
      city: city,
      section: section,
      body: body,
    };

    console.log(JSON.stringify(newPost));

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(newPost),
      });
      if (!res.ok) {
        throw Error("post failed");
      }
      const data = await res.json();
      navigate(`/posts/${data._id}`);
    } catch (err) {
      console.log(err);
    }

    setTitle("");
    setCity("");
    setSection("food");
    setBody("");
  };

  return (
    <Wrapper>
      <form onSubmit={handleSubmit} className="form">
        <h3>{!isEditing ? "Add Post" : "Edit Post"}</h3>
        <div className="form-center">
          <FormRow type="text" name="userId" readonly value={userId} />
          <FormRow
            type="text"
            name="title"
            value={title}
            handleChange={(e) => setTitle(e.target.value)}
          />
          <FormRow
            type="text"
            name="city"
            value={city}
            handleChange={(e) => setCity(e.target.value)}
          />
          <FormRowSelect
            labelText="section"
            name="section"
            value="food"
            handleChange={(e) => setSection(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor={"content"} className="form-label">
            content
          </label>
          <input
            className="form-input textbox"
            id="content"
            type="text"
            value={body}
            name="content"
            onChange={(e) => setBody(e.target.value)}
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
