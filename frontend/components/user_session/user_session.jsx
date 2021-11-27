import React from 'react'

const UserSession = ({ currentUser, logout, openModal }) => {
    //return sign in link at the upper right corner if no user is signed in
    // debugger 
    const userPresent = () => (
         <a className='session-button' onClick={logout}>Sign Out</a>
    )

    //return a dropdown if there is a user present 
    const noUserPresent = () => ( 
        <a className='session-button' onClick={() => openModal('login')}>Sign In</a>   
    )

    return currentUser ? userPresent() : noUserPresent();
}

export default UserSession; 

