import React from "react";
import { Link } from "react-router-dom";
import UserSessionContainer from '../user_session/user_session_container';

const Header = ({ currentUser, logout, openModal }) => {
    
    //render this res when there's no current user 
    const sessionLinks = () => (
        <div className="header-container">
            <div className="header-left">
                <Link to="/">Buy</Link>
                <Link to="/">Rent</Link>
                <Link to="/properties/new">Sell</Link>
                <Link to="/">Agent Finder</Link>
            </div>

            <Link to="/" className="logoContainer"> <img src="https://lh3.googleusercontent.com/Xo7bzpMz7a_CcTXol6Aw8Vx7C0inIf4nz54w0Ds4Hgo4gAlgF8nBrYrjerVjif00S2YpmTGvsKgKKeIqFaMuxh_9enSyyQw6xQwrBq7a4w1MFymcClsmWbd6yHaR7ZKaiK9eq8hLSQ=w2400" className="logo" /> </Link>

            <div className="header-right">
                <Link to="/">Manage Rentals</Link>
                <Link to="/">Advertise</Link>
                <Link to="/">Help</Link>
                <UserSessionContainer />
            </div>
        </div>
    )

    //render this res when there is a current user 
    const personalGreeting = () => (
        <div className="header-container">
            <div className="header-left">
                <Link to="/buy">Buy</Link>
                <Link to="/buy">Rent</Link>
                <Link to="/properties/new">Sell</Link>
                <Link to="/">Agent Finder</Link>
            </div>

            <Link to="/" className="logoContainer"> <img src="https://lh3.googleusercontent.com/Xo7bzpMz7a_CcTXol6Aw8Vx7C0inIf4nz54w0Ds4Hgo4gAlgF8nBrYrjerVjif00S2YpmTGvsKgKKeIqFaMuxh_9enSyyQw6xQwrBq7a4w1MFymcClsmWbd6yHaR7ZKaiK9eq8hLSQ=w2400" className="logo" /> </Link>

            <div className="header-right">
                <Link to="/">Manage Rentals</Link>
                <Link to="/">Advertise</Link>
                <Link to="/">Help</Link>
                <UserSessionContainer />
            </div>
        </div>
    )

    return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
}

export default Header; 