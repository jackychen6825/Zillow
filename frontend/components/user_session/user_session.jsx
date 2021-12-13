import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class UserSession extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownOpen: ''
        }

        this.userPresent = this.userPresent.bind(this)
        this.toggleDropdown = this.toggleDropdown.bind(this)
        this.handleSignin = this.handleSignin.bind(this)
    }

    toggleDropdown() {
        const boolean = this.state.dropdownOpen;
        this.setState({
            dropdownOpen: !boolean
        })
    }

    userPresent() {
        const { logout } = this.props;
        return (
            <div className="user-session-container">
                <div className="user-dropdown-btn" onClick={this.toggleDropdown}>
                    <i className="fas fa-house-user fa-2x"></i>
                </div>

                <div className={this.state.dropdownOpen ? `user-dropdown-container`: 'hide'}>
                    <div className="dropdown-items"><Link to="/saved">Saved homes</Link></div>
                    <div className="dropdown-items"><Link to="">Saved Search</Link></div>
                    <div className="dropdown-items"><Link to="">Your home</Link></div>
                    <div className="dropdown-items-signout" onClick={logout}><p>Sign out</p></div>
                </div>
            </div>
        )

    }

    handleSignin() {
        this.setState({
            dropdownOpen: false
        })
        this.props.openModal('login')
    }

    noUserPresent() { 
        return <a className='session-button' onClick={this.handleSignin}>Sign In</a>   
    }

    render() {
           return this.props.currentUser ? this.userPresent() : this.noUserPresent();
    }
}
