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
        <button onClick={() => dispatch(openModal('signup')) }>
            Signup
        </button>
    ),
    closeModal: () => dispatch(closeModal())
}); 

export default connect(mapSTP, mapDTP)(SessionForm); 
