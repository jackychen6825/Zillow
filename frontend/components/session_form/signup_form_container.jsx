import React from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import SessionForm from "./session_form";
import { clearErrors } from "../../actions/session_actions";

const mapSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'signup'
});

const mapDTP = (dispatch) => ({
    processForm: user => dispatch(signup(user)), 
    otherForm: (
        <a className='other-form' onClick={() => dispatch(openModal('login'))} > 
            Sign in
        </a>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapSTP, mapDTP)(SessionForm);


