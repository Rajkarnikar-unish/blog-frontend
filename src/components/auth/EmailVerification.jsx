import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { verifyUserEmail } from "../../services/UserService";

const EmailVerification = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState("");

    useEffect(()=> {
        const token = searchParams.get("token");

        if(!token) {
            setMessage("Invalid verification link.");
            setLoading(false);
            return;
        }
        try{
            verifyUserEmail(token)
            .then((response) => {
                if(response.status === 200) {
                    navigate("/login", {state: {message : response.data.message}});
                }
                
            })
        } catch(error) {
            setMessage("Invalid or expired token.");
            setLoading(false);
        }
    }, [searchParams, navigate]);

    return (
        <div  style={{ textAlign: "center", marginTop: "50px" }}>
            {loading ? <p> Verifying your email address...</p> :
            <p>{message}</p>}
        </div>
    )

};

export default EmailVerification;