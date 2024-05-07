import React from "react";

const NewBlogComponent = () => {
  return (
    <>
      <div className="container mt-3">
        <input
          type="text"
          placeholder="Title"
          className="form-control mb-2 title-field"
          aria-label="Large"
        />
        <textarea
          className="form-control post-field"
          rows={15}
          cols={100}
          aria-label="With textarea"
          placeholder="Write here..."
        ></textarea>
      </div>
    </>
  );
};

export default NewBlogComponent;
