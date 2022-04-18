import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import "../styles/Navbar.css"

export default function Navbar() {
    let navigate = useNavigate()

    const goToHome = () => {
        navigate('/')
    }

    const goToLogin = () => {
        navigate('/login')
    }

    const goToSignUp = () => {
        navigate('/signup')
    }

    return (
        <div className="navbar">
            <div className="nav-buttons">
                <button onClick={goToHome}>HOME</button>
                <button onClick={goToLogin}>LOGIN</button>
                <button onClick={goToSignUp}>SIGN UP</button>
            </div>
        </div>
    )
}