import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { useState } from 'react';
import * as Yup from "yup";
import {toast} from "react-toastify";
import { resetPasswordAPI } from '../../services/UserService';
import { useNavigate, useSearchParams } from 'react-router-dom';

const ResetPassword = () => {

    const navigator = useNavigate();

    const [searchParams] = useSearchParams();
    const [token, setToken] = useState("");
    const [message, setMessage] = useState("");
    const [isSubmitted, setSubmitted] = useState(false);

    useEffect(() => {
        const tokenParam = searchParams.get("token");
        if(tokenParam) {
            setToken(tokenParam);
            formik.setFieldValue("token", tokenParam);
        }
    }, [searchParams]);

    const [showPassword, setShowPassword] = useState(false);

    const validationSchema = Yup.object().shape({
        password: Yup.string()
                .matches(
                    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&+=])(?=\S+$).{6,32}$/,
                    "Password must be 6-32 characters long, conntain at least one uppercase letter, one lowercase letter, one digit, and one special character."
                )
                .required("Required"),

        confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords do not match")
                .required("Required"),
    });

    const formik = useFormik({
        initialValues: {
            password: "",
            confirmPassword: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            const password = values.password;
            const resetBody = {
                password,
                token
            }
            resetPasswordAPI(resetBody)
                .then((response) => {
                    const {status, message} = response.data;
                    
                    if(status === 200) {
                        setMessage(message);
                        setSubmitted(true);
                        setTimeout(() => navigator("/login"), 7000);
                    }
                })
                .catch((error) => {
                    const {status, data} = error.response;
                    if( status === 400) {
                        showFailureToast(data.message);
                    }else {
                        showFailureToast(data.message);
                    }
                })
        }
    })

    const showFailureToast = (message) => {
        toast.error(message, {
            position: "bottom-right",
        });
    };

    const handlePasswordVisibility = (e) => {
        setShowPassword(e.target.checked);
    };

  return (
    <div className="container">
        <div className="row">
            <h1 className="display-6 mt-3 mb-4 text-center">Reset Password</h1>
            <div className="card col-md-6 offset-md-3">
                <div className="card-body">
                    <form onSubmit={formik.handleSubmit} className="container">
                        {isSubmitted ? (<p className='text-success'>{message}</p>) : null}
                        <div className="form-group mb-2">
                            <label htmlFor="password" className="form-label">
                                Password</label>
                            <input
                                type={`${showPassword ? "text" : "password"}`}
                                id='password'
                                className='form-control'
                                name='password'
                                onChange={(e) => formik.handleChange(e)}
                                onBlur={formik.handleBlur}
                                value={formik.values.password}
                                placeholder='Enter a password'
                            />
                            {formik.touched.password && formik.errors.password ? (
                                <div>{formik.errors.password}</div>
                            ) : null}
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="confirmPassword" className="form-label">
                                Confirm Password</label>
                            <input
                                type={`${showPassword ? "text" : "password"}`}
                                id='confirmPassword'
                                className='form-control'
                                name='confirmPassword'
                                onChange={(e) => formik.handleChange(e)}
                                onBlur={formik.handleBlur}
                                value={formik.values.confirmPassword}
                                placeholder='Re-enter your password'
                            />
                            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                <div>{formik.errors.confirmPassword}</div>
                            ) : null}
                        </div>
                        <div className="col-9 d-flex">
                            <input 
                                type="checkbox"
                                className='form-check-input'
                                onChange={handlePasswordVisibility}
                             />
                             <p className="px-2 pb-1">Show password</p>
                        </div>
                        <button 
                            className="btn btn-success d-grid col-6 mb-1 mx-auto"
                            type='submit'
                        >
                            Reset Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
};

export default ResetPassword;
