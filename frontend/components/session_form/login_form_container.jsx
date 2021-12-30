import { connect } from "react-redux";
import React from "react";
import { login } from "../../actions/session_actions"; 
import { openModal, closeModal } from "../../actions/modal_actions";
import SessionForm from "./session_form";
import { clearErrors } from "../../actions/session_actions";

const mapSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'login',
});

const mapDTP = (dispatch) => ({
    processForm: user => dispatch(login(user)),
    otherForm: (
        <a className='other-form' onClick={() => dispatch(openModal('signup')) }>
            New account
        </a>
    ),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors())
}); 

export default connect(mapSTP, mapDTP)(SessionForm); 
