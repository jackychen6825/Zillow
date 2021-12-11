import React from "react";
import { withRouter } from "react-router";

class SessionForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.guestLogin = this.guestLogin.bind(this);
    }

    handleSubmit(e){
        e.preventDefault(); 
        this.props.processForm(this.state).then(this.props.closeModal);
    }

    update(field){
        return e => this.setState({
            [field]: e.target.value
        })
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    // for demo login so the user doesnt have to manually sign up
    guestLogin(e){
        e.preventDefault();

        this.props.processForm({
            email: "guest@gmail.com",
            password: "password"
        }).then(this.props.closeModal)
    }

    //clear errors between forms (login/signup)
    componentWillUnmount(){
        this.props.clearErrors();
    }


    render(){
        return (
            <div className='session-form-container'>
                <form onSubmit={this.handleSubmit} className='session-form-box'>
                    
                    <p className='session-intro'>Welcome to Millow <i className="fas fa-home"></i></p>

                    <p className='session-option-container'><span className='current-option'>{this.props.formType}</span> <span>{this.props.otherForm}</span></p>
                    <div onClick={this.props.closeModal} className='close-x'>X</div>
                    {this.renderErrors()}
                    <div className='session-form'>
                        <br/>
                        <span className='input-labels'>Email</span>

                    <input type="text" value={this.state.email} onChange={this.update('email')} className='session-input' placeholder='Enter email' />
                     
                        <br/>
                        <span className='input-labels'>Password</span>

                    <input type="password" value={this.state.password} onChange={this.update('password')} className='session-input' placeholder='Enter password' />
                       
                        <br/>
                        <input type="submit" className='session-submit' value={this.props.formType} />
                        <br/>
                        <input type="submit" className='session-submit' value='Guest Login' onClick={this.guestLogin}/>
                    </div>

                </form>
            </div>
        )
    }

}

export default withRouter(SessionForm); 