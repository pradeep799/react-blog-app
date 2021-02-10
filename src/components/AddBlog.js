import React, { useContext, useState } from "react";
import { BlogContext } from "../Context";
import "../App.css";

export default function AddBlog() {
  const { dispatch } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [snippet, setSnippet] = useState("");
  const [body, setBody] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleSnippet = (e) => {
    setSnippet(e.target.value);
  };

  const handleBody = (e) => {
    setBody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", payload: { title, snippet, body } });
    setTitle("");
    setSnippet("");
    setBody("");
  };

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleTitle}
          required
        />
      </div>
      <div>
        <label htmlFor="snippet">Snippet</label>
        <input
          type="text"
          name="snippet"
          id="snippet"
          value={snippet}
          onChange={handleSnippet}
        />
      </div>
      <div>
        <label htmlFor="body">Body</label>

        <textarea
          id="body"
          name="body"
          value={body}
          onChange={handleBody}
          rows="4"
        ></textarea>
      </div>
      <div>
        <input type="submit" value="submit" />
      </div>
    </form>
  );
}
