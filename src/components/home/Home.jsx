import React, { useEffect, useState } from "react";
import BlogTile from "../blog/BlogTile";
import { getAllBlogsAPI } from "../../services/BlogService";
import FooterComponent from "../footer/Footer";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getAllBlogsAPI().then((response) => {
      const data = response.data;
      setBlogs(data);
    });
  }, []);

  return (
    <div className="container main-container">
      <div className="container mt-4 blogs-container">
        {blogs.map((blog, index) => (
          <BlogTile key={index} blog={blog} />
        ))}
        <FooterComponent />
      </div>
      {/* <div className="container main-aside">
        <p className="h5 aside-title">Trending now</p>
        <div className="topics">
          <p className="topic">Technology</p>
          <p className="topic">Marketing</p>
          <p className="topic">Stocks</p>
          <p className="topic">US</p>
          <p className="topic">Health & Wellness</p>
          <p className="topic">Lifestyle</p>
          <p className="topic">Education</p>
          <p className="topic">Business</p>
        </div> */}
      {/* <p className="h5 aside-title">Suggested Blogs</p>
        <div className="suggestions"></div> */}
      {/* </div> */}
    </div>
  );
};

export default Home;
