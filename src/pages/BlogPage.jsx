import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getBlogsByIDAPI } from "../services/BlogService";
import parse from "html-react-parser";
import FooterComponent from "../components/FooterComponent";

const BlogPage = () => {
  const state = useLocation();

  const id = state.state;

  const [blog, setBlog] = useState([]);
  const [author, setAuthor] = useState([]);

  useEffect(() => {
    getBlogsByIDAPI(id).then((response) => {
      const data = response.data;
      setAuthor(data.author);
      setBlog(data);
    });
  }, []);

  const { title, content, lastUpdated } = blog;
  const timeStamp = new Date(lastUpdated);
  const date = timeStamp.toLocaleDateString();
  const time = timeStamp.toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const { username, firstName, lastName, email } = author;

  return (
    <>
      <div className="container blog-page">
        <div className="container blog-content">
          <p className="h2 mt-4 title">{parse(`${title}`)}</p>

          <div className="meta">
            <p className="username">{username} •</p>
            <p className="ps-1">{date}</p>
          </div>
          <p className="content">{parse(`${content}`)}</p>
        </div>
        <div className="container blog-aside"></div>
      </div>
      <FooterComponent />
    </>
  );
};

export default BlogPage;
