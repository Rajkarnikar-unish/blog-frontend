import React, { useEffect, useState } from "react";
import { getUserDetailsAPI } from "../../services/UserService";
import { getPostsByUserAPI } from "../../services/BlogService";
import { getCookies, getOAuthUser } from "../../services/OAuthService";
import BlogTile from "../blog/BlogTile";

const Profile = () => {
  let token = localStorage.getItem("accessToken");
  const [userDetails, setUserDetails] = useState({});

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (token) {
      getUserDetailsAPI(token).then((response) => {
        const data = response.data;
        setUserDetails(data);

        getPostsByUserAPI(data.id).then((response) => {
          setBlogs(response.data);
        });
      });
    } else {
      getOAuthUser().then((response) => {
        const data = response.data;
        setUserDetails(data);

        getPostsByUserAPI(data.id).then((response) => {
          setBlogs(response.data);
        });
      });
    }
  }, []);

  const { username, firstName, lastName, email, profileImageUrl } = userDetails;

  return (
    <>
      <div className="container profile-container">
        <div className="profile profile-aside">
          <div className="image-container">
            <img
              src={profileImageUrl}
              alt="profile-picture"
              className="profile-img"
            />
            <div className="overlay">
              <p
                className="upload-text"
                onClick={() => console.log("UPLOAD BUTTON")}
              >
                Upload Image
              </p>
            </div>
          </div>
          <div className="user-details">
            <div className="name">
              <p className="">
                {firstName
                  ? firstName.substring(0, 1).toUpperCase() +
                    firstName.substring(1)
                  : ""}
              </p>
              <p className="ps-1">
                {lastName
                  ? lastName.substring(0, 1).toUpperCase() +
                    lastName.substring(1)
                  : ""}
              </p>
            </div>
            <p className="username">{username}</p>
            <button className="btn btn-success edit-btn">Edit profile</button>

            {/* {blogs.map((blog, index) => )} */}
          </div>
        </div>
        <div className="container user-blogs mt-4 ms-4">
          <div>
            <p className="display-6">Blogs</p>
            <div className="chips mb-4">
              <button className="chip-btn selected-chip">All</button>
              <button className="chip-btn">Published</button>
              <button className="chip-btn">Drafts</button>
            </div>
            {blogs.map((blog, index) => (
              <BlogTile key={index} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
