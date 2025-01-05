import React, { useState,useRef,useEffect } from "react";
import "./Navicon.css";
import { ImMenu3 } from "react-icons/im";


const Navicon = () =>{
    const[showNav,setShownav] = useState(false);
    const Navref = useRef(null);
    const toggleNav = () =>{
        setShownav(!showNav);
    };

    useEffect(() => {
        const handleClickoutside = (event) => {
            if(Navref.current && !Navref.current.contains(event.target)){
                setShownav(false)
            };
        }
        if (showNav){
            document.addEventListener('mousedown',handleClickoutside)
        } else{
            document.addEventListener('mousedown',handleClickoutside)
        }
        return()=>{
            document.removeEventListener('mousedown',handleClickoutside)
        }

    },[showNav]
    );
    return(
         <div className="navicon-container">
            <ImMenu3 className="menu-icon" onClick={toggleNav}/>
            {showNav && (
                <ul className="nav-list">
                    <li><a href="/">Home</a></li>
                    <li><a href="/allproducts">Products</a></li>
                    <li><a href="/contact">Contact</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            )

            }
         </div>
    );
};
export default Navicon;