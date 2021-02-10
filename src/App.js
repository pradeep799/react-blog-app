import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import AddBlog from "./components/AddBlog";
import BlogDetails from "./components/BlogDetails";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import { BlogProvider } from "./Context";

function App() {
  return (
    <BlogProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/create" component={AddBlog} />
          <Route exact path="/blogs/:id" component={BlogDetails} />
        </Switch>
      </BrowserRouter>
    </BlogProvider>
  );
}

export default App;
