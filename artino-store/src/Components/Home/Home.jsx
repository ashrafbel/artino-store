import React from "react";
import "./Home.css";
import Header from "../Header/Header";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
// import Getstarted from "../Getstarted/Getstarted";
// import Login from "../Login/Login";
import { useNavigate } from "react-router-dom";
const Home = () =>{
    const navigate = useNavigate();
    const handleGetStarted = () => {
        navigate("/getstarted");
    };
    const handleViewoffers = () => {
        navigate("/viewoffers");
    };
    const handleLogin = () => {
        navigate("/login");
    };
    return(
        <div className="header">
            <Header />
            <div className="text-img">
                <div className="text">
                    <h1>Wrap Yourself in Handmade Elegance</h1>
                    <p>Discover unique, handcrafted pieces made with love. Elevate your style and comfort with our beautiful crochet collection. Explore cozy blankets <br /> stylish accessories, and more at CozyLoops Crochet <br /> Creations. Wrap yourself in handmade elegance today!</p>
                    <div className="buttons">
                        <button onClick={handleGetStarted}  className="start">Get Started</button>
                        <button onClick={handleViewoffers} className="offers">View Offers</button>
                        <button onClick={handleLogin} className="offers">Login</button>
                    </div>
                    <div className="social-media">
                        <ul>
                            <li><a href=""><FaInstagram /></a></li>
                            <li><a href=""><FaFacebook /></a></li>
                            <li><a href=""><FaTiktok /></a></li>
                        </ul>

                    </div>

                </div>
                <img src="/Images/homeimage.jpg" alt="home image" />
            </div>
    
            

        </div>
    )
}
export default Home;