import React from "react";
import './Contact.css';
import Header from "../Header/Header";
import { IoHome } from "react-icons/io5";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
const Contact = () =>{
    return(
        <div>
            <Header />
            <h1 className="title">We're Here to Help You</h1>
            <div className="contact-us">
                <div className="msg-field">
                    <input type="text" className="msg-input" placeholder="Send Us a Message"/>
                    <div className="name-email">
                        <input className="name-ipt" type="text" placeholder="Enter your name"/>
                        <input className="email-ipt" type="email" placeholder="Email"/>
                    </div>
                    <input className="ipt-subject" type="text" placeholder="Subject" />
                </div>
                <div className="contact-icons">
                    <IoHome /><span>Street Hassan 2, Rabat Morocco</span>
                    <FaPhoneSquareAlt /><span>+2126-00-00-00-00</span>
                    <AiFillMessage /><span>support@artino.com</span>

                </div>
            </div>
            <button className="send">Send</button>

        </div>
    )
};
export default Contact;