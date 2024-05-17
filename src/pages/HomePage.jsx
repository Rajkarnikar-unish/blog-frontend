import React, { useEffect, useState } from "react";
import BlogTileComponent from "../components/BlogTileComponent";
import ProfileDrawer from "../components/ProfileDrawer";
import { getAllBlogsAPI } from "../services/UserService";
import Blog from "../model/Blog";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAllBlogsAPI().then((response) => {
      const data = response.data;
      setBlogs(data);
    });
  }, []);

  // console.log(blogs);

  return (
    <div className="container main-container">
      <div className="container blogs-container">
        {blogs.map((blog, index) => (
          <BlogTileComponent key={index} blog={blog} />
        ))}
      </div>
      <div className="container main-aside">
        <p className="display-3"></p>
      </div>
    </div>
  );
};

export default HomePage;
