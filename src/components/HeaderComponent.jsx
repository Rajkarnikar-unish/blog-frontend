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
            <a
              className="navbar-brand"
              href={`/`}
              onClick={(e) => {
                e.preventDefault();
                navigator("/");
              }}
            >
              ThoughtLabs
            </a>

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
