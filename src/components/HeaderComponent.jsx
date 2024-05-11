import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const navigator = useNavigate();

  function userLogin() {
    navigator("/login");
  }

  function writeNewBlog() {
    navigator("/new-blog");
  }

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

            <div className="navbar-nav">
              <ul className="nav">
                <a className="btn btn-link" onClick={writeNewBlog}>
                  Write
                </a>
                <button className="btn btn-outline-light" onClick={userLogin}>
                  Login
                </button>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderComponent;
