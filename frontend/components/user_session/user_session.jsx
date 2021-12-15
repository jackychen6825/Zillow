import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class UserSession extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dropdownOpen: ''
        }

        this.userPresent = this.userPresent.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleSignin = this.handleSignin.bind(this);
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
                    <div onClick={this.toggleDropdown} className="dropdown-items"><Link to="/saved">Saved homes</Link></div>
                    <div onClick={this.toggleDropdown} className="dropdown-items"><Link to="/saved">Saved search</Link></div>
                    <div onClick={this.toggleDropdown} className="dropdown-items"><Link to="/properties/new">Your home</Link></div>
                    <div onClick={logout} className="dropdown-items-signout"><Link to="/">Sign out</Link></div>
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

export default withRouter(UserSession)