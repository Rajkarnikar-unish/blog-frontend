import React from "react";
import { useNavigate } from "react-router-dom";

const HeaderComponent = () => {
  const navigator = useNavigate();

  function userLogin() {
    navigator("/login");
  }

  return (
    <>
      <header>
        <nav
          className="navbar navbar-dark bg-dark"
          style={{ paddingLeft: "50px" }}
        >
          <div className="container-fluid">
            <a
              className="navbar-brand"
              href={`/`}
              onClick={(e) => {
                e.preventDefault();
                navigator("/");
              }}
            >
              Dashboard
            </a>

            <div className="navbar-nav">
              <ul className="nav">
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
