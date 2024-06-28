import React, { useEffect } from "react";
import { useAuth } from "../AuthProvider";

const Profile = () => {
  return (
    <>
      <div className="container profile-container">
        {/* Needs to divs one for posted content and one for editing user details and displaying them */}
        <div className="container user-blogs">
          <div>
            <p className="display-6">Your content</p>
            <div className="blog-container">
              <p>title text</p>
            </div>
          </div>
        </div>
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
          <div className="user-details">{/* <p>${user.username}</p> */}</div>
        </div>
      </div>
    </>
  );
};

export default Profile;
