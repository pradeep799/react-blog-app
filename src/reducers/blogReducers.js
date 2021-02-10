export const blogReducers = (state, action) => {
  switch (action.type) {
    case "ADD":
      const newBlog = {
        title: action.payload.title,
        snippet: action.payload.snippet,
        body: action.payload.body,
      };
      console.log("ADD");
      return [...state, newBlog];
    case "DELETE":
      state.filter((blog) => {
        return blog.id !== action.payload.id;
      });
      console.log(state);
      return [...state];

    default:
      return console.log("Default");
  }
};
