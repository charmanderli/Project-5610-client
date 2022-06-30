import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Wrapper from "../../assets/wrappers/DashboardFromPage";
import { FormRow } from "../../components";
import Post from "../../components/Post";
import { getPostsByLocation } from "../../services/service";

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [location, setLocation] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const params = parseParams(searchParams.entries());
    if (Object.keys(params).length > 0) {
      getPostsFromServer(params);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChange(e) {
    setLocation(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSearchParams(serializeFormData(e.target));
    const params = getParamsFromForm(e.target);
    getPostsFromServer(params);
  }

  function getPostsFromServer(data) {
    getPostsByLocation(data)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setPosts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getParamsFromForm(form) {
    return parseParams(new FormData(form).entries());
  }

  function serializeFormData(form) {
    return new URLSearchParams(new FormData(form)).toString();
  }

  function parseParams(entries) {
    const result = {};
    for (const [key, value] of entries) {
      result[key] = value;
    }
    return result;
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <FormRow
          labelText={"Search Posts by Location"}
          name={"location"}
          type={"text"}
          handleChange={handleChange}
          value={location}
        />
        <div className="btn-container">
          <button className="btn btn-block submit-btn" type="submit">
            submit
          </button>
        </div>
      </form>

      <>
        {posts.length > 0
          ? posts.map((item) => (
              <div key={item._id}>
                <Post post={item} />
              </div>
            ))
          : Object.keys(parseParams(searchParams.entries())).length > 0 && (
              <p>No posts to show</p>
            )}
      </>
    </Wrapper>
  );
}

export default Search;
