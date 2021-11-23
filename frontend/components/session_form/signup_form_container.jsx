import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import { Link } from "react-router-dom";
import SessionForm from "./session_form";
import React from "react";

const mapSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'sign up',
    link: <Link to='/login'>log in</Link>
});

const mapDTP = (dispatch) => ({
    processForm: user => dispatch(signup(user))
});

export default connect(mapSTP, mapDTP)(SessionForm);


