import { connect } from "react-redux";
import { login } from "../../actions/session_actions"; 
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import React from "react";

const mapSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'log in',
    link: <Link to="/signup">sign up</Link>
});

const mapDTP = (dispatch) => ({
    processForm: user => dispatch(login(user))
}); 

export default connect(mapSTP, mapDTP)(SessionForm); 
