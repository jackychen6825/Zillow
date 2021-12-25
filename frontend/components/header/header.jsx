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

            <Link to="/" className="logoContainer"> <img src="https://lh3.googleusercontent.com/Mi8qBC9eaJspl7S-MWKFT3f9llTQxcC9NP_B8ZK9UBwOTq8EtrqE7nI5_-AkkTJagOM2drVYZ_XBjkmxAr0DiuClKPFV6jFffaDtLfkiQMEUDhLZY8aJyf0H7uM1JBtkOVxS26-5Jg=w2400" className="logo" /> </Link>

            <div className="header-right">
                <Link to="/">Angel's List</Link>
                <Link to="/">LinkedIn</Link>
                <Link to="/">GitHub</Link>
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

            <Link to="/" className="logoContainer"> <img src="https://lh3.googleusercontent.com/Mi8qBC9eaJspl7S-MWKFT3f9llTQxcC9NP_B8ZK9UBwOTq8EtrqE7nI5_-AkkTJagOM2drVYZ_XBjkmxAr0DiuClKPFV6jFffaDtLfkiQMEUDhLZY8aJyf0H7uM1JBtkOVxS26-5Jg=w2400" className="logo" /> </Link>

            <div className="header-right">
                <Link to="/">Angel's List</Link>
                <Link to="/">LinkedIn</Link>
                <Link to="/">GitHub</Link>
                <UserSessionContainer />
            </div>
        </div>
    )

    return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
}

export default Header; 