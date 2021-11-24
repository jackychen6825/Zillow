import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout, openModal }) => {
    
    //render this res when there's no current user 
    const sessionLinks = () => (
        <div className="header-container">
            <div className="header-left">
                <Link to="/">Buy</Link>
                <Link to="/">Rent</Link>
                <Link to="/">Sell</Link>
                <Link to="/">Home Loans</Link>
                <Link to="/">Agent Finder</Link>
            </div>

            <Link to="/" className="logoContainer"> <img src="https://lh3.googleusercontent.com/Xo7bzpMz7a_CcTXol6Aw8Vx7C0inIf4nz54w0Ds4Hgo4gAlgF8nBrYrjerVjif00S2YpmTGvsKgKKeIqFaMuxh_9enSyyQw6xQwrBq7a4w1MFymcClsmWbd6yHaR7ZKaiK9eq8hLSQ=w2400" className="logo" /> </Link>

            <div className="header-right">
                <Link to="/">Manage Rentals</Link>
                <Link to="/">Advertise</Link>
                <button onClick={() => openModal('login')}>Log In</button>
                &nbsp;
                <button onClick={() => openModal('signup')}>Sign Up</button>
            </div>
        </div>
    )

    //render this res when there is a current user 
    const personalGreeting = () => (
        <div className="header-container">
            <div className="header-left">
                <Link to="/">Buy</Link>
                <Link to="/">Rent</Link>
                <Link to="/">Sell</Link>
                <Link to="/">Home Loans</Link>
                <Link to="/">Agent Finder</Link>
            </div>

            <Link to="/" className="logoContainer"> <img src="https://lh3.googleusercontent.com/Xo7bzpMz7a_CcTXol6Aw8Vx7C0inIf4nz54w0Ds4Hgo4gAlgF8nBrYrjerVjif00S2YpmTGvsKgKKeIqFaMuxh_9enSyyQw6xQwrBq7a4w1MFymcClsmWbd6yHaR7ZKaiK9eq8hLSQ=w2400" className="logo" /> </Link>

            <div className="header-right">
                <Link to="/">Manage Rentals</Link>
                <Link to="/">Advertise</Link>
                <button className="header-button" onClick={logout}>Log Out</button>
            </div>
        </div>
    )

    return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
}

export default Greeting; 