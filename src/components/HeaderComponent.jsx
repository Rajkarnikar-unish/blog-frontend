import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const HeaderComponent = () => {
  const navigator = useNavigate();
  const { user, logout } = useAuth();

  function userLogin() {
    navigator("/login");
  }

  function userLogout() {
    logout();
    showLogoutToast();
    navigator("/");
  }

  function writeNewBlog() {
    user
      ? navigator("/new-blog")
      : toast.warning("User not logged in", {
          position: "bottom-right",
        });
  }

  const showLogoutToast = () => {
    toast.success("Logout Successful", {
      position: "bottom-right",
    });
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-dark" style={{ paddingLeft: "50px" }}>
          <div className="container-fluid">
            <div
              className="navbar-brand"
              onClick={(e) => {
                e.preventDefault();
                navigator("/");
              }}
            >
              <img src="logo-no-bg.png" width={60} height={60} />
              <a className="navbar-brand" href={`/`}>
                ThoughtLabs
              </a>
            </div>

            {/* <div className="h3">{isProfileOpen ? "Open" : "Close"}</div> */}

            <div className="navbar-nav">
              <ul className="nav">
                <a className="btn btn-link" onClick={writeNewBlog}>
                  Write
                </a>
                {user ? (
                  <div className="profile">
                    <div className="avatar">
                      <FontAwesomeIcon icon={faUser} size="lg" />
                    </div>
                    <div className="profile-content">
                      <button
                        className="btn"
                        onClick={() => navigator("/profile")}
                      >
                        Profile
                      </button>
                      <button className="btn" onClick={userLogout}>
                        Logout
                      </button>
                    </div>
                  </div>
                ) : (
                  <button className="btn btn-outline-light" onClick={userLogin}>
                    Login
                  </button>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderComponent;
