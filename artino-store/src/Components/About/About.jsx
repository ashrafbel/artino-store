import React from "react";
import './About.css';
import Header from "../Header/Header";
import { GiDeliveryDrone } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
import { MdChangeCircle } from "react-icons/md";
const About = () =>{
    return(
        <div>
            <Header />
            <div className="aboutus">
                <h1>About Artino store</h1>
                <div className="txt-img">
                    <p>Welcome to Artino, your ultimate destination for exquisite, custom-made crochet creations. <br /> At Artino, we believe in turning your crochet dreams into reality. Whether you have <br /> a specific design in mind or need inspiration, we're here to bring your vision to life. <br /> Simply place an order with us, specifying your desired model and favorite colors, <br /> and our skilled artisans will craft it with precision and love.

We pride ourselves <br /> on providing full support throughout the process, ensuring that your experience <br /> with Artino is as seamless and enjoyable as possible. Join us in celebrating <br /> the art of crochet and let us create something <br /> uniquely beautiful just for you.</p>
                    <img src="/Images/aboutimg.jpg" alt="" />
                </div>
                <div  className="elements">
                    <div className="delivery">
                        <p>fast delevery</p>
                        <GiDeliveryDrone className="dicon"/>
                    </div>
                    <div className="support">
                        <p>full support</p>
                        <MdSupportAgent className="sprticon"/>
                    </div>
                    <div className="exchange">
                        <p>product exchange</p>
                        <MdChangeCircle className="change"/>

                    </div>

                </div>


            </div>
            
        </div>
    )
}
export default About;