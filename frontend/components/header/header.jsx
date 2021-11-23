import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className="header-container">
            <div className="header-left">
                <Link to="/">Buy</Link>
                <Link to="/">Rent</Link>
                <Link to="/">Sell</Link>
                <Link to="/">Home Loans</Link>
                <Link to="/">Agent Finder</Link>
            </div>

            <Link to="/" className="logoContainer"> <img src="https://1000logos.net/wp-content/uploads/2017/11/Zillow-Logo.png" className="logo"/> </Link>

            <div className="header-right">
                <Link to="/">Manage Rentals</Link>
                <Link to="/">Advertise</Link>
                <Link to="/">Help</Link>
                <Link to="/signup">Sign In</Link>
            </div>
        </div>
    )
}

export default Header; 