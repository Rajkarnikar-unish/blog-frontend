import React from "react";
import BlogTileComponent from "./BlogTileComponent";

const MainComponent = () => {
  return (
    <div className="container main-container">
      <div className="container blogs-container">
        {[...Array(10)].map((_, index) => (
          <BlogTileComponent key={index} />
        ))}
      </div>
      <div className="container main-aside">
        <p className="display-3"></p>
      </div>
    </div>
  );
};

export default MainComponent;
