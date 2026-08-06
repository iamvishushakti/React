import { Link } from "react-router-dom";
import "../assets/css/login.css";
import AuthContext from "../Context/auth/AuthContext";
import React from "react";

import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [useEmail, setUserEmail] = React.useState('admin@test.com');
    const [usePassword, setUserPassword] = React.useState('admin@123');
    const [errorMessage, setErrorMessage] = React.useState('');

    const {userAuthValidation} = React.useContext(AuthContext);
    const loginUser = ()=>{
        setErrorMessage('');
        const response = userAuthValidation({email:useEmail, password:usePassword});
        if(response.status){
            navigate('/');
        }else{
            setErrorMessage(response.message);
        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center login-page">
                <div className="col-lg-5 col-md-7">
                    <div className="login-card">
                        <div className="text-center mb-4">
                            <h2 className="login-title">
                                Welcome Back 👋
                            </h2>
                            <p className="login-subtitle">
                                Login to continue your blogging journey.
                            </p>
                            <p className="text-danger">{errorMessage}</p>
                        </div>
                        <form>
                            <div className="mb-3">
                                <label className="form-label">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={useEmail}
                                    onChange={(e)=>{setUserEmail(e.target.value)}}
                                    className="form-control login-input"
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="form-label">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    value={usePassword}
                                    onChange={(e)=>{setUserPassword(e.target.value)}}
                                    className="form-control login-input"
                                    placeholder="Enter your password"
                                />
                            </div>
                            <button
                                type="button"
                                className="login-btn w-100"
                                onClick={()=>{loginUser()}}
                            >
                                Login
                            </button>
                        </form>
                        <div className="text-center mt-4">
                            <span className="text-secondary">
                                Don't have an account?
                            </span>
                            <Link
                                to="/signup"
                                className="signup-link ms-2"
                            >
                                Create Account
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}