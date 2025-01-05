import { React, useState } from "react";
import './Getstarted.css';

const Getstarted = () => {
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // إرسال البيانات إلى الخادم (API Express)
        const response = await fetch("http://localhost:8080/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: firstName,
                email,
                password,
            }),
        });

        const data = await response.json();
        if (response.status === 201) {
            setMessage("Registration successful! Welcome to Artino!");
        } else {
            setMessage(data.message || "Registration failed. Please try again.");
        }
    };

    return (
        <div className="get-started-container">
            <form className="get-started" onSubmit={handleSubmit}>
                <h1>Register</h1>
                <p>Signup now and get full access to our store</p>
                {message && <p className="welcome-msg">{message}</p>}
                <div className="name">
                    <input
                        className="first-name"
                        type="text"
                        placeholder="First name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        required
                    />
                </div>
                <div className="email-password">
                    <input
                        className="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        className="password"
                        type="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className="signup">Sign Up</button>
            </form>
        </div>
    );
};

export default Getstarted;
