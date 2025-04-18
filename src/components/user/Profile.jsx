import React, { useEffect, useState } from "react";
import { getUserDetailsAPI } from "../../services/UserService";
import { getAllBlogsAPI, getPostsByUserAPI } from "../../services/BlogService";
import { getCookies, getOAuthUser } from "../../services/OAuthService";
import BlogTile from "../blog/BlogTile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faEllipsis, faXmark } from "@fortawesome/free-solid-svg-icons";
import './User.css';
import { Tab } from "bootstrap";

const Profile = () => {
  let token = localStorage.getItem("accessToken");
  const [userDetails, setUserDetails] = useState({});
  const [selectedStatus, setSelectedStatus] = useState("All");

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

    const triggerTabList = document.querySelectorAll('#tab button');
    triggerTabList.forEach((triggerEl) => {
      const tabTrigger = new Tab(triggerEl);
      triggerEl.addEventListener('click', (e) => {
        e.preventDefault();
        tabTrigger.show();
      });
    });
  }, []);

  const { username, firstName, lastName, email, profileImageUrl } = userDetails;

  const capitalizedUsername = capitalizeString(username);
  const fullName = capitalizeString(firstName) + " " + capitalizeString(lastName);

  function capitalizeString(string) {
    return string?.charAt(0).toUpperCase() + string?.slice(1) || "";
  }

  const [interests, setInterests] = useState( [
    'Technology',
    'Health',
    'Insurance',
    'Sports',
    'Education',
    'International Students',
    'Corporate Life',
    'Trading',
  ]);

  const handleDelete = (index) => {
    setInterests((prev) => prev.filter((_, i) => i!==index));
  };

  const handlePillClick = (status) => {
    setSelectedStatus(status);
  }

  return (
    <>
      <div className="container profile-container">
        <div className="user-content mt-3 ms-3">
          <ul className="nav nav-tabs" id="tab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active" id="blogs-tab" data-bs-toggle="tab" data-bs-target="#blogs" type="button" role="tab" aria-controls="blogs" aria-selected="true">Blogs</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="saved-tab" data-bs-toggle="tab" data-bs-target="#saved" type="button" role="tab" aria-controls="saved" aria-selected="false">Saved</button>
            </li>
          </ul>
          <div className="tab-content" id="tabContent">
            <div className="tab-pane fade show active" id="blogs" role="tabpanel" aria-labelledby="blogs-tab">
              <ul className="nav nav-pills mt-2 ms-2 nav-fill">
                <li className="nav-item">
                  <a 
                    href="#" 
                    className={`nav-link ${selectedStatus === "All" ? "active" : ""}`}
                    onClick={() => handlePillClick("All")}
                  >
                    All
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                    href="#" 
                    className={`nav-link ${selectedStatus === "Published" ? "active" : ""}`}
                    onClick={() => handlePillClick("Published")}>
                    Published
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                    href="#" 
                    className={`nav-link ${selectedStatus === "Drafts" ? "active" : ""}`}
                    onClick={() => handlePillClick("Drafts")}>
                      Drafts
                  </a>
                </li>
              </ul>
              {/* <div className="chips mb-4 mt-3">
                {status.map((label, index) => (
                  <button 
                    key={index}
                    className={`chip-btn me-2 ${label === selectedStatus ? 'selected-chip' : ''}`}
                    onClick={() => setSelectedStatus(label)}>
                      {label}
                  </button>
                ))}
              </div> */}
              {blogs.map((blog, index) => (
                <BlogTile key={index} blog={blog} />
              ))}
            </div>
            <div 
              className="tab-pane fade" id="saved" role="tabpanel" aria-labelledby="saved-tab">
                This is test saved content for tab layout using bootstrap.
            </div>
          </div>
        </div>
        <div className="user-aside mt-3 ms-3">
          <div className="banner-container">
            <img src="gradient.png" alt="banner-image" className="rounded-top banner-img" />
            <FontAwesomeIcon icon={faEllipsis} className="more-menu"/>
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
            </p>
          </div>
          <div className="interests-container mt-3 rounded pt-3 p-3 pb-2">
            <p className="h5">What you're into</p>
            <div className="interests">
              {interests.map((interest, index) => (
                <div key={index} className="interest me-2">
                  <a href="#" className="interest-text">{interest}</a>
                  <FontAwesomeIcon icon={faXmark} className="delete-btn ms-2" onClick={() => handleDelete(index)}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;