import React from "react";
import { Link } from "react-router-dom";
import UserSessionContainer from '../user_session/user_session_container';

const Header = ({ currentUser, logout, openModal }) => {
    
    //render this res when there's no current user 
    const sessionLinks = () => (
        <div className="header-container">
            <div className="header-left">
                <Link to="/buy">Buy</Link>
                <Link to="/rental">Rent</Link>
                <a onClick={() => openModal('login')}>Sell</a>
                <Link to="https://chenjacky.com/" target="_blank">Agent Finder</Link>
            </div>

            <Link to="/" className="logoContainer"> <img src="https://lh3.googleusercontent.com/Mi8qBC9eaJspl7S-MWKFT3f9llTQxcC9NP_B8ZK9UBwOTq8EtrqE7nI5_-AkkTJagOM2drVYZ_XBjkmxAr0DiuClKPFV6jFffaDtLfkiQMEUDhLZY8aJyf0H7uM1JBtkOVxS26-5Jg=w2400" className="logo" /> </Link>

            <div className="header-right">
                <a href="https://www.linkedin.com/in/jacky-chen6825/" target="_blank">LinkedIn</a>
                <a href="https://github.com/jackychen6825" target="_blank">GitHub</a>
                <a href="https://angel.co/u/jacky-chen-33" target="_blank">AngeList</a>
                <UserSessionContainer />
            </div>
        </div>
    )

    //render this res when there is a current user 
    const personalGreeting = () => (
        <div className="header-container">
            <div className="header-left">
                <Link to="/buy">Buy</Link>
                <Link to="/rental">Rent</Link>
                <Link to="/properties/new">Sell</Link>
                <Link to="https://chenjacky.com/" target="_blank">Agent Finder</Link>
            </div>

            <Link to="/" className="logoContainer"> <img src="https://lh3.googleusercontent.com/Mi8qBC9eaJspl7S-MWKFT3f9llTQxcC9NP_B8ZK9UBwOTq8EtrqE7nI5_-AkkTJagOM2drVYZ_XBjkmxAr0DiuClKPFV6jFffaDtLfkiQMEUDhLZY8aJyf0H7uM1JBtkOVxS26-5Jg=w2400" className="logo" /> </Link>

            <div className="header-right">
                <a href="https://www.linkedin.com/in/jacky-chen6825/" target="_blank">LinkedIn</a>
                <a href="https://github.com/jackychen6825" target="_blank">GitHub</a>
                <a href="https://angel.co/u/jacky-chen-33" target="_blank">AngeList</a>
                <UserSessionContainer />
            </div>
        </div>
    )

    return currentUser ? personalGreeting(currentUser, logout) : sessionLinks();
}

export default Header; 