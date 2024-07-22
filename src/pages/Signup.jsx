import { React, useState, useContext } from "react";
import { signUpUserAPI } from "../services/UserService.js";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import axios from "axios";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Required").min(3).max(20),
    firstName: Yup.string().required("Required").min(3).max(30),
    lastName: Yup.string().required("Required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Required")
      .max(50),
    password: Yup.string()
      .matches(
        /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{6,32}$/,
        "Password must be 6-32 characters long, conntain at least one uppercase letter, one lowercase letter, one digit, and one special character."
      )
      .required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signUpUserAPI(values)
        .then((response) => {
          console.log(response);
          const { status, message } = response.data;

          if (status === 201) {
            showRegistrationToast(message);
            navigator("/login");
          }
        })
        .catch((error) => {
          console.log(error);
          const { status, data } = error.response;
          if (status === 400) {
            showFailureToast(data.message);
          } else {
            showFailureToast(data.message);
          }
        });
    },
  });

  const showRegistrationToast = (message) => {
    toast.success(message, {
      position: "bottom-right",
    });
  };

  const showFailureToast = (message) => {
    toast.error(message, {
      position: "bottom-right",
    });
  };

  const handlePasswordVisibility = (e) => {
    setShowPassword(e.target.checked);
  };

  const navigator = useNavigate();

  return (
    <div className="container pb-5">
      <div className="row mb-5">
        <h1 className="display-6 mb-4 mt-5 text-center">Register here.</h1>
        <div className="card col-md-4 offset-md-3 ">
          <div className="card-body">
            <form onSubmit={formik.handleSubmit}>
              <div className="form-group mb-2">
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="E.g. johnDoe"
                  className="form-control"
                  onChange={(e) => formik.handleChange(e)}
                  onBlur={formik.handleBlur}
                  value={formik.values.username}
                  name="username"
                  id="username"
                />
                {formik.touched.username && formik.errors.username ? (
                  <div>{formik.errors.username}</div>
                ) : null}
              </div>
              <div className="form-group mb-2">
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="firstName" className="form-label">
                      First name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="E.g. John"
                      className="form-control"
                      onChange={(e) => formik.handleChange(e)}
                      onBlur={formik.handleBlur}
                      value={formik.values.firstName}
                      name="firstName"
                    />
                    {formik.touched.firstName && formik.errors.firstName ? (
                      <div>{formik.errors.firstName}</div>
                    ) : null}
                  </div>
                  <div className="col-6">
                    <label htmlFor="lastName" className="form-label">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      type="text"
                      placeholder="E.g. Doe"
                      className="form-control"
                      onChange={(e) => formik.handleChange(e)}
                      onBlur={formik.handleBlur}
                      value={formik.values.lastName}
                      name="lastName"
                    />
                    {formik.touched.lastName && formik.errors.lastName ? (
                      <div>{formik.errors.lastName}</div>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="form-group mb-2">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="E.g. johndoe@gmail.com"
                  className="form-control"
                  onChange={(e) => formik.handleChange(e)}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  name="email"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
              </div>
              <div className="form-group mb-2">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  id="password"
                  className="form-control"
                  name="password"
                  onChange={(e) => formik.handleChange(e)}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  placeholder="Enter a password"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type={`${showPassword ? "text" : "password"}`}
                  className="form-control"
                  name="confirmPassword"
                  id="confirmPassword"
                  onChange={(e) => formik.handleChange(e)}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  placeholder="Re-enter your password"
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <div>{formik.errors.confirmPassword}</div>
                ) : null}
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
                type="submit"
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
