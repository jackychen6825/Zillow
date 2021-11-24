import { connect } from "react-redux";
import React from "react";
import { login } from "../../actions/session_actions"; 
import { openModal, closeModal } from "../../actions/modal_actions";
import SessionForm from "./session_form";

const mapSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'login',
});

const mapDTP = (dispatch) => ({
    processForm: user => dispatch(login(user)),
    otherForm: (
        <a onClick={() => dispatch(openModal('signup')) }>
            New Account
        </a>
    ),
    closeModal: () => dispatch(closeModal())
}); 

export default connect(mapSTP, mapDTP)(SessionForm); 
