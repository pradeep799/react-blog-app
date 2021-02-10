import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogContext } from "../Context";
import "../App.css";

export default function BlogDetails() {
  let { id } = useParams();
  id = parseInt(id);

  const { blogs, dispatch } = useContext(BlogContext);

  let blog = blogs.filter((blog) => blog.id === id);

  return (
    <section className="blog-container">
      <div className="blog-heading">
        <h1>{blog[0].title}</h1>
      </div>
      <div className="blog-snippet">
        <p>{blog[0].snippet}</p>
      </div>
      <div className="blog-snippet">
        <p>{blog[0].body}</p>
      </div>
    </section>
  );
}
