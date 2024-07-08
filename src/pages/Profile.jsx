import React, { useEffect, useState } from "react";
import { getUserDetailsAPI } from "../services/UserService";
import BlogTileComponent from "../components/BlogTileComponent";

const Profile = () => {
  const token = localStorage.getItem("accessToken");
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    getUserDetailsAPI(token).then((response) => {
      const data = response.data;
      setUserDetails(data);
    });
  }, []);

  const { id, username, firstName, lastName, email } = userDetails;

  return (
    <>
      <div className="container profile-container">
        <div className="profile profile-aside">
          <div className="image-container">
            <img
              src="src/assets/github.jpeg"
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
          </div>
        </div>
        <div className="container user-blogs mt-4 ms-4">
          <div>
            <p className="display-6">Blogs</p>
            <div className="chips">
              <button className="chip-btn selected-chip">All</button>
              <button className="chip-btn">Published</button>
              <button className="chip-btn">Drafts</button>
            </div>
            {/* <BlogTileComponent /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
