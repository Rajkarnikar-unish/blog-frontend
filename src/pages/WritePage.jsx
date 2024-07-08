import React, { useState } from "react";
import {
  createAndPublishBlogPostAPI,
  createBlogPostAPI,
} from "../services/BlogService";
import { faBookDead } from "@fortawesome/free-solid-svg-icons";
import "react-quill/dist/quill.bubble.css";
import axios from "axios";
import QuillEditor from "react-quill";

const WritePage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [errors, setErrors] = useState({
    title: "",
    content: "",
  });

  const postBlog = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const blogPost = { title, content };
      console.log(blogPost);

      const token = localStorage.getItem("accessToken");

      createBlogPostAPI(blogPost, token)
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data);
          }
        })
        .catch((error) => {
          console.error(
            "Error saving the draft: ",
            error.message || "An unknown error occured!"
          );
        });
    }
    {
      console.error("Form not validated");
    }
  };

  const postAndPublishBlog = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const blogPost = { title, content };

      const token = localStorage.getItem("accessToken");

      createAndPublishBlogPostAPI(blogPost, token)
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data);
          }
        })
        .catch((error) => {
          console.error(
            "An error occured: ",
            error.message || "An unknown error occured!"
          );
        });
    } else {
      console.error("Form not validated");
    }
  };

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };

    if (title.trim()) {
      errorsCopy.title = "";
    } else {
      errorsCopy.title = "Title cannot be blank";
      valid = false;
    }

    if (content.trim()) {
      errorsCopy.content = "";
    } else {
      errorsCopy.content = "content cannot be blank";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color",
    "clean",
  ];

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, false] }],
        ["bold", "italic", "underline", "blockquote"],
        [{ color: [] }],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["link", "image"],
        ["clean"],
      ],
    },
  };

  return (
    <>
      <div className="container editor-container mt-3">
        <form className="blog-form">
          {/* <input
            type="text"
            placeholder="Title"
            className={`form-control mb-2 title-field ${
              errors.title ? "is-invalid" : ""
            }`}
            aria-label="Large"
            onChange={(e) => {
              console.log(e);
              return setTitle(e.target.value);
            }}
          /> */}

          <QuillEditor
            className={`title-editor  ${errors.title ? "is-valid" : ""}`}
            theme="bubble"
            placeholder="Your title here..."
            onChange={(value) => {
              setTitle(value);
            }}
          />
          {errors.title && (
            <div className="invalid-feedback">{errors.title}</div>
          )}
          <QuillEditor
            className="content-editor pb-1"
            theme="bubble"
            value={content}
            formats={formats}
            placeholder="What's on your mind?"
            modules={modules}
            onChange={(value) => {
              setContent(value);
            }}
          />
        </form>
        <div className="blog-buttons mt-3">
          <button className="btn btn-danger" onClick={(e) => postBlog(e)}>
            Save draft
          </button>
          <button
            className="btn ms-3 btn-success"
            onClick={(e) => postAndPublishBlog(e)}
          >
            Publish
          </button>
        </div>
      </div>
    </>
  );
};

export default WritePage;
