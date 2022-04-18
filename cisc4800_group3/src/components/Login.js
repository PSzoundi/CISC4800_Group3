import React from "react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import backgroundVideo from "../media/clouds_video.mp4"
import "../styles/Login.css"
import Navbar from './Navbar';

export default function Login() {
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        setLoginData(prevData => {
            return {
                ...prevData,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="login">
            <Navbar />
            <form onSubmit={handleSubmit} className="login-form">
                <label className="login-username">
                    <input className="login-input"
                        value={loginData.username}
                        placeholder="Username"
                        type="text"
                        name="username"
                        onChange={handleChange}
                    />
                </label>
                <label className="login-password">
                    <input className="login-input"
                        value={loginData.password}
                        placeholder="Password"
                        type="text"
                        name="password"
                        onChange={handleChange}
                    />
                </label>
                <input type="submit" value="Login" className="login-btns login-submit-btn" />
            </form>
        </div>
    )
}