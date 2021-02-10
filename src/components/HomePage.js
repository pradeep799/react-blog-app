import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { BlogContext } from "../Context";
import "../App.css";
export default function HomePage() {
  const { blogs, dispatch } = useContext(BlogContext);
  console.log(blogs);
  const handleDelete = (id) => {
    dispatch({ type: "DELETE_BLOG", payload: { id } });
  };
  return (
    <section className="main">
      <ul>
        {blogs.map((blog, id) => {
          return (
            <li className="blog-info" key={blog.id}>
              <Link to={"/blogs/" + blog.id} className="blog-info__Link">
                {blog.title}
              </Link>
              {/* <button onClick={() => handleDelete(blog.id)}>Delete</button> */}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
