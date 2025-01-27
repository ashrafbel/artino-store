import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './Getstarted.css';

const Getstarted = () => {
    const [fullName, setFulltName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Send a POST request to the signup API endpoint
        const response = await fetch("http://localhost:8080/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: fullName,
                email,
                password,
            }),
        });

        const data = await response.json(); // Parse the JSON response
        if (response.status === 201) {
            setMessage("Registration successful! Welcome to Artino!");
            navigate("/");

        } else {
            // Display the error message from the server or a default message
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
                        placeholder="FullName"
                        value={fullName}
                        onChange={(e) => setFulltName(e.target.value)}
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
                <p>
                    Already have an account?{" "}
                    <Link to="/login" className="login-link">
                        Login here
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Getstarted;
