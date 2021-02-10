import React, { createContext, useReducer } from "react";
import { blogReducers } from "./reducers/blogReducers";
import { data } from "./data";

console.log(data);
const BlogContext = createContext();

const BlogProvider = (props) => {
  const [blogs, dispatch] = useReducer(blogReducers, data);

  return (
    <BlogContext.Provider value={{ blogs, dispatch }}>
      {props.children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogProvider };
