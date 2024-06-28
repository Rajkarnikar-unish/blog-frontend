import { React, useState, useContext } from "react";
// import { UserContext } from "../model/userContext.jsx";
import { signUpUser } from "../services/UserService.js";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  // const { user, setUser } = useContext(UserContext);

  const handlePasswordVisibility = (e) => {
    setShowPassword(e.target.checked);
  };

  // const [errors, setErrors] = useState(user);

  function validateForm() {
    console.log(user);
  }

  const navigator = useNavigate();

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSignUp = (user, e) => {
    e.preventDefault();
    signUpUser(user)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container pb-5">
      <div className="row mb-5">
        <h1 className="display-6 mb-4 mt-5 text-center">Register here.</h1>
        <div className="card col-md-6 offset-md-3 ">
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  placeholder="E.g. johnDoe"
                  className="form-control"
                  onChange={handleInputChange}
                  // value={user.username}
                  name="username"
                />
              </div>
              <div className="form-group mb-2">
                <div className="row">
                  <div className="col-6">
                    <label className="form-label">First name</label>
                    <input
                      type="text"
                      placeholder="E.g. John"
                      className="form-control"
                      onChange={handleInputChange}
                      // value={user.firstName}
                      name="firstName"
                    />
                  </div>
                  <div className="col-6">
                    <label className="form-label">Last name</label>
                    <input
                      type="text"
                      placeholder="E.g. Doe"
                      className="form-control"
                      onChange={handleInputChange}
                      // value={user.lastName}
                      name="lastName"
                    />
                  </div>
                </div>
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Email address</label>
                <input
                  type="email"
                  placeholder="E.g. johndoe@gmail.com"
                  className="form-control"
                  onChange={handleInputChange}
                  // value={user.email}
                  name="email"
                />
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Password</label>
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  className="form-control"
                  name="password"
                  onChange={handleInputChange}
                  // value={user.password}
                  placeholder="Enter a password"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Confirm Password</label>
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  className="form-control"
                  name="confirmPassword"
                  onChange={handleInputChange}
                  // value={user.confirmPassword}
                  placeholder="Re-enter your password"
                />
              </div>
              <div className="col-9 d-flex">
                <input
                  type="checkbox"
                  className="mb-3"
                  onChange={handlePasswordVisibility}
                />
                <p className="px-2 pb-1">Show password</p>
              </div>
              <button
                className="btn btn-success d-grid col-6 mb-1 mx-auto"
                onClick={(e) => {
                  handleSignUp(user, e);
                }}
              >
                Sign Up
              </button>
              <div>
                <p>
                  Already have an account?
                  <a
                    className="ps-2"
                    href={`/login`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigator("/login");
                    }}
                  >
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
