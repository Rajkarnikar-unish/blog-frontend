import React from "react";
import { useNavigate } from "react-router-dom";
import parse from "html-react-parser";

const BlogTile = ({ blog }) => {
  const { id, title, content, author, createdAt } = blog;

  const timeStamp = new Date(createdAt);
  const date = timeStamp.toLocaleDateString();
  const time = timeStamp.toLocaleTimeString();

  const navigator = useNavigate();

  const handleBlogNavigation = (id) => {
    navigator(`/${encodeURIComponent(title)}`, { state: id });
  };

  return (
    <>
      <div
        className="container pt-1 blog-tile mb-3"
        onClick={() => handleBlogNavigation(id)}
      >
        <div className="container blog-box">
          <p className="h5">{parse(`${title}`)}</p>
          <div className="date-author">
            {/* <p className="h6">{createdAt}</p> */}
            <p className="h6">{date}</p>
            <p className="h6 ms-2">{author.username}</p>
          </div>
          <p className="intro">{parse(`${content}`)}</p>
        </div>
        <div>
          {/* <img
            src="src\assets\github.jpeg"
            alt="ThumbnailImage"
            className="thumbnail"
          /> */}
        </div>
      </div>
    </>
  );
};

export default BlogTile;
