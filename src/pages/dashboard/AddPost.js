import React from "react";
import Wrapper from "../../assets/wrappers/DashboardFromPage";
import { FormRow, FormRowSelect } from "../../components";

export default function AddPost() {
  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`${name}: ${value}`);
  };
  return (
    <Wrapper>
      <form className="form">
        <h3>Add Post</h3>
        <div className="form-center">
          <FormRow
            type="text"
            name="userId"
            value="userId"
            handleChange={handleInput}
          />
          <FormRow
            type="text"
            name="title"
            value="title"
            handleChange={handleInput}
          />
          <FormRow
            type="text"
            name="city"
            value="city"
            handleChange={handleInput}
          />
          <FormRowSelect
            labelText="section"
            name="section"
            value="section"
            handleChange={handleInput}
          />
        </div>

        <div>
          <label htmlFor={"content"} className="form-label">
            content
          </label>
          <input
            className="form-input textbox"
            type="text"
            value="content"
            name="content"
            onChange={handleInput}
          />
        </div>

        <div className="btn-container">
          <button
            className="btn btn-block submit-btn"
            type="submit"
            onClick={handleInput}
          >
            submit
          </button>
        </div>
      </form>
    </Wrapper>
  );
}
