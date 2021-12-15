import React from "react";
import { Link } from "react-router-dom";
import UserSessionContainer from '../user_session/user_session_container';

const Header = ({ currentUser, logout, openModal }) => {
    
    //render this res when there's no current user 
    const sessionLinks = () => (
        <div className="header-container">
            <div className="header-left">
                <Link to="/buy">Buy</Link>
                <Link to="/buy">Rent</Link>
                <a onClick={() => openModal('login')}>Sell</a>
                <Link to="/">Agent Finder</Link>
            </div>

            <Link to="/" className="logoContainer"> <img src="https://lh3.googleusercontent.com/wWFmNNqPkMgnDftKPPNkJuVhyuwvY2RkSrB9X7g9hRHM22YI3Y6GphqwBJ2YS3yR3gdysAC9BWCLaLaGGdI1yBFSDxtoVsaftELzo_U1fRQPXTTZgGoxX9Ss34ljy0VvSQtb1rYvow=w2400" className="logo" /> </Link>

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

            <Link to="/" className="logoContainer"> <img src="https://lh3.googleusercontent.com/wWFmNNqPkMgnDftKPPNkJuVhyuwvY2RkSrB9X7g9hRHM22YI3Y6GphqwBJ2YS3yR3gdysAC9BWCLaLaGGdI1yBFSDxtoVsaftELzo_U1fRQPXTTZgGoxX9Ss34ljy0VvSQtb1rYvow=w2400" className="logo" /> </Link>

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