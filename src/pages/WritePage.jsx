import React, { useState } from "react";
import { createBlogPostAPI } from "../services/UserService";
import { faBookDead } from "@fortawesome/free-solid-svg-icons";
import "react-quill/dist/quill.snow.css";
import QuillEditor from "react-quill";

const WritePage = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const [errors, setErrors] = useState({
    title: "",
    body: "",
  });

  function postBlog() {
    if (validateForm()) {
      const blogPost = { title, body };

      console.log(blogPost);

      // createBlogPostAPI(blogPost)
      //   .then((response) => {
      //     console.log(response.data);
      //     return response.data;
      //     // if (response.status === 200) {

      //     // }
      //   })
      //   .catch((error) => {
      //     console.error(
      //       "Error posting the blog",
      //       error.message || "An unknown error occured!"
      //     );
      //   });
    }
  }

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };

    if (title.trim()) {
      errorsCopy.title = "";
    } else {
      errorsCopy.title = "Title cannot be blank";
      valid = false;
    }

    if (body.trim()) {
      errorsCopy.body = "";
    } else {
      errorsCopy.body = "Body cannot be blank";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  return (
    <>
      <div className="container mt-3">
        <form>
          <input
            type="text"
            placeholder="Title"
            className={`form-control mb-2 title-field ${
              errors.title ? "is-invalid" : ""
            }`}
            aria-label="Large"
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && (
            <div className="invalid-feedback">{errors.title}</div>
          )}
          <QuillEditor
            className="editor pb-5"
            // theme="snow"
            value={body}
            onChange={(value) => setBody(value)}
          />

          <div className="mt-3">
            <button
              className="btn btn-danger"
              onClick={(e) => {
                e.preventDefault();
                postBlog();
              }}
            >
              Save draft
            </button>
            <button className="btn ms-3 btn-success">Publish</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default WritePage;
