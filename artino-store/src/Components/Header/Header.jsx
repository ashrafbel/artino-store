import React from "react";
import "./Header.css";
import { MdShoppingCartCheckout } from "react-icons/md";
import Navicon from "./Navicon/Navicon";
import { useNavigate } from "react-router-dom";

const Header = () =>{
    const navigate = useNavigate();
    const handleProducts = () => {
        navigate("/allproducts")
    }
    return(
        <div className="header-items">
            <img src="/Images/artinologo.png" alt="artino store" />
            <input type="search" placeholder="search..."/>
            <ul className="head-list">
                <li><a href="" onClick={handleProducts}>Products</a></li>
                <li><a href=""><MdShoppingCartCheckout className="bag-icon"/></a></li>
            </ul>
            <div>
                <Navicon />
            </div>

                 
        </div>

    )
}
export default Header;