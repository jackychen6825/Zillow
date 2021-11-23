import React from "react";

class SessionForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault(); 
        this.props.processForm(this.state); //EG this.state = { email: "jc6825@nyu.edu", password: "password" }
    }

    update(field){
        return e => this.setState({
            [field]: e.target.value
        })
    }

    renderErrors(){
        return(
            <ul>
                {this.props.errors.map(
                    (error, i) => <li key={i}>{error}</li>
                )}
            </ul>
        );
    }

    render(){
        const { formType, link } = this.props;
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    "Welcome to Willow" 
                    <br/>
                    Please {formType} or {link}
                    <br/>
                    {this.renderErrors()}
                    <label>Email
                        <input type="text" value={this.state.email} onChange={this.update('email')}/>
                    </label>
                    <label>Password
                        <input type="password" value={this.state.password} onChange={this.update('password')}/>
                    </label>
                    <br/>
                    <input type="submit" value={formType} />
                </form>
            </div>
        )
    }

}

export default SessionForm; 