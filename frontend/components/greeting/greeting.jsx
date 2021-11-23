import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
    
    //render this res when there's no current user 
    const notLoggedInRes = () => (
        <nav>
            <Link to="/signup">Sign Up</Link>
            <br/>
            <Link to="/login">Log In</Link>
        </nav>
    )

    //render this res when there is a current user 
    const loggedInRes = () => (
        //implicit returns with the parens 
        <div>
            Home Page :3
            <button onClick={logout}>Sign Out</button>
        </div>
    )

    return currentUser ? loggedInRes() : notLoggedInRes(); 
}

export default Greeting; 