import React, { useEffect, useState } from "react";
import { loginUserAPI } from "../../services/UserService.js";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../AuthProvider.jsx";
import User from "../../model/User.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SocialSignOnButton from "./SocialSignOnButton.jsx";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const navigator = useNavigate();

  const handlePasswordVisibility = (e) => {
    setShowPassword(e.target.checked);
  };

  const { login } = useAuth();

  function loginUser(e) {
    e.preventDefault();
    if (validateForm()) {
      const userResponse = { username, password };

      loginUserAPI(userResponse)
        .then((response) => {
          const data = response.data;

          setUsername("");
          setPassword("");
          const {
            username,
            email,
            firstName,
            lastName,
            token: accessToken,
            refreshToken,
          } = data;

          if (!username || !email || !accessToken || !refreshToken) {
            throw new Error("Incomplete user data received");
          }

          const user = new User(
            username,
            firstName,
            lastName,
            email,
            accessToken,
            refreshToken
          );
          login({ user });

          showLoginToast();
          navigator("/");
        })
        .catch((error) => {
          console.log("Error object:", error);
          if(error.response) {
            console.log("Error response data: ", error.response.data);
            console.log("Error response status: ", error.response.status);

            if(error.response.status === 409) {
              toast.info("Please verify your email address to login!", {
                position: "bottom-right",
              });
            }else if (error.response.status === 401) {
              const errorMessage = error.response.data.message || "Invalid login credentials";
              toast.error(errorMessage, {
                position: "bottom-right"
              });
            }else {
              toast.error("Login failed, Please try again.", {
                position: "bottom-right"
              });
            }
          } else if(error.request) {
            toast.error("No response from server. Please try again later.", {
              position: "bottom-right"
            });
          } else {
            // Something happened in setting up the request that triggered an Error
            toast.error(error.message || "An unknown error occurred!", {
              position: "bottom-right"
            });
          }
        });
    }
  }

  const showLoginToast = () => {
    toast.success("Login Successfully", {
      position: "bottom-right",
    });
  };

  function validateForm() {
    let valid = true;

    const errorsCopy = { ...errors };

    if (username.trim()) {
      errorsCopy.username = "";
    } else {
      errorsCopy.username = "Username must not be blank";
      valid = false;
    }
    if (password.trim()) {
      errorsCopy.password = "";
    } else {
      errorsCopy.password = "Password must not be blank";
      valid = false;
    }

    setErrors(errorsCopy);
    return valid;
  }

  const location = useLocation();
  const [emailVerifiedMessage, setEmailVerifiedMessage] = useState("");

  useEffect(() => {
    if(location.state?.message) {
      setEmailVerifiedMessage(location.state?.message);
    }
  }, [location]);

  return (
    <div className="container">
      <div className="row">
        <h1 className="display-6 mt-3 mb-4 text-center">Login here.</h1>
        <div className="card col-md-6 offset-md-3">
          <div className="card-body">
            <form className="container">
              {emailVerifiedMessage && <p className="text-success">{emailVerifiedMessage}</p>}
              <div className="form-group mb-2">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  value={username}
                  name="username"
                  placeholder="E.g. johnDoe"
                  className={`form-control ${
                    errors.username ? "is-invalid" : ""
                  }`}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && (
                  <div className="invalid-feedback">{errors.username}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Password</label>
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  value={password}
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter a password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-8 d-flex">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      onChange={handlePasswordVisibility}
                    />
                    <p className="px-2 pb-1">Show password</p>
                  </div>
                  <div className="col text-end">
                    <a href={`/forgot-password`} 
                    onClick={(e) => {
                      e.preventDefault();
                      navigator("/forgot-password");
                    }}>Forgot password?</a>
                  </div>
                </div>
              </div>
              <button
                className="btn btn-success d-grid col-6 mx-auto mb-3"
                onClick={(e) => loginUser(e)}
              >
                Login
              </button>
            </form>
            <div className="sign-up container">
              <div>
                <p className="mb-2">
                  Don't have an account yet?{" "}
                  <a
                    href={`/signup`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigator("/signup");
                    }}
                  >
                    Sign Up
                  </a>
                </p>
              </div>
            </div>
            <div className="divider">
              <p className="divider-text">OR</p>
            </div>
            <div className="social-button">
              <SocialSignOnButton
                imageSrc="./google.png"
                onClick={() => {
                  window.location.href =
                    "http://localhost:8080/oauth2/authorization/google";
                }}
              />
              <SocialSignOnButton
                imageSrc="./facebook.png"
                onClick={() => {
                  window.location.href =
                    "http://localhost:8080/oauth2/authorization/facebook";
                }}
              />
              <SocialSignOnButton
                imageSrc="./github.png"
                onClick={() => {
                  window.location.href =
                    "http://localhost:8080/oauth2/authorization/github";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
