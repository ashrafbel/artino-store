import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:8080/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            setMessage("Login successful!");
            navigate("/");
        } else {
            setMessage(data.message || "Login failed. Please try again.");
        }
    };

    return (
        <div className="get-started">
            <h1>Login</h1>
            <p>Welcome back! Please login to your account.</p>
            {message && <p className="welcome-msg">{message}</p>}
            <form onSubmit={handleSubmit}>
                <div className="email-password">
                    <input
                        type="email"
                        className="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        className="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="signup">LOGIN</button>
            </form>
        </div>
    );
};

export default Login;
