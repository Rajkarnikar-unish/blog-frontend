import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from "yup";
import { forgotPassword } from '../../services/UserService';
import { useSearchParams } from 'react-router-dom';

const ForgotPassword = () => {
    const [searchParams] = useSearchParams();
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const emailParam = searchParams.get("email");
        if(emailParam) {
            setEmail(emailParam);
            formik.setFieldValue("email", emailParam);
        }
    }, [searchParams]);

    const validationSchema = Yup.object().shape({
        email: Yup.string()
        .email("Invalid email address")
        .required("Required")
        .max(50)
    });

    const formik = useFormik({
        initialValues: {
            email: email || "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values.email);
            forgotPassword(values.email)
                .then((response) => {
                    const {status, message} = response.data;
                    
                    if(status === 200) {
                        console.log(email);
                        setMessage(message);
                        setSubmitted(true);
                    }
                });
        }
    });

  return (
    <div className="container">
        <div className="row">
            <h1 className="display-6 mt-3 mb-4 text-center">Forgot your password?</h1>
            <div className="card col-md-6 offset-md-3">
                <div className="card-body">
                    {!submitted ? (
                        <form onSubmit={formik.handleSubmit} className="container">
                        <div className="form-group mb-2">
                            <label className="form-label">Enter your email address</label>
                            <input
                                id='email'
                                type='email' 
                                placeholder='E.g. johndoe@gmail.com'
                                className='form-control'
                                onChange={(e) => formik.handleChange(e)}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                                name="email"
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div>{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <button
                         className='btn btn-success d-grid mb-1 mx-auto'
                         type='submit'
                        >Reset Password</button>
                    </form>
                    ) : (<div className="text-success">{message} We've sent you instructions to reset your password.</div>)}
                    
                </div>
            </div>
        </div>
    </div>
  )
};

export default ForgotPassword;
