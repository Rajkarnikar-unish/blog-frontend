import React, { useEffect, useState } from "react";
import { getUserDetailsAPI } from "../../services/UserService";
import { getPostsByUserAPI } from "../../services/BlogService";
import { getCookies, getOAuthUser } from "../../services/OAuthService";
import BlogTile from "../blog/BlogTile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faEllipsis } from "@fortawesome/free-solid-svg-icons";
import './User.css';

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

  const capitalizedUsername = capitalizeString(username);
  const fullName = capitalizeString(firstName) + " " + capitalizeString(lastName);

  function capitalizeString(string) {
    return string?.charAt(0).toUpperCase() + string?.slice(1) || "";
  }

  return (
    <>
      <div className="container profile-container">
        {/* <div className="container user-blogs mt-4 ms-4">
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
        </div> */}

        <div className="user-content mt-3 ms-3">
          <div className="user-blogss">
            <p className="h6">Blogs</p>
            <div className="chips mb-4">
              {/* <button className="chip-btn selected-chip">All</button>
              <button className="chip-btn">Published</button>
              <button className="chip-btn">Drafts</button> */}
              {/* {blogs.map((blog, index) => (
              <BlogTile key={index} blog={blog} />
            ))} */}
            </div>
          </div>
          <div className="user-saved-blogs"><p className="h6">Saved</p></div>
        </div>
        <div className="user-aside mt-3">
          <div className="banner-container">
            <img src="gradient.png" alt="banner-image" className="rounded-top banner-img" />
            <div className="user ms-4">
              <img src={profileImageUrl} alt="profile-image" className="rounded img-container" />
              <div className="user-bio ms-2">
                <p className="h5 mb-0">{capitalizedUsername}</p>
                <p className="mb-0">{fullName}</p>
                <p className="mb-0">{email}</p>
              </div>
            </div>
          </div>
          <div className="about rounded mt-3 pt-3 p-3 pb-2">
            <div className="about-header">
              <p className="h5">About</p>
              <FontAwesomeIcon icon={faPencil} className="edit-icon" onClick={() => alert("this is a test")} />
            </div>
            <p className="bio">
              Tell us about yourself...
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo aliquam similique voluptatum praesentium mollitia excepturi omnis.
            </p>
          </div>
          <div className="interests-container mt-3 rounded pt-3 p-3 pb-2">
            <p className="h5">What you're into</p>
            <div className="interests">
              <p className="me-2">Trading</p>
              <p className="me-2">US</p>
              <p className="me-2">Technology</p>
              <p className="me-2">US</p>
              <p className="me-2">US</p>
              <p className="me-2">Backend</p>
              <p className="me-2">US</p>
              <p className="me-2">Health & Wellness</p>
              <p className="me-2">Lifestyle</p>
              <p className="me-2">Education</p>
              <p className="me-2">Business</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;


/**
 * <div className="profile profile-aside">
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

            // {blogs.map((blog, index) => )} 
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
 */