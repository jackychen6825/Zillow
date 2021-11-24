import React from "react";
import { connect } from "react-redux";
import { signup } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";
import SessionForm from "./session_form";

const mapSTP = ({ errors }) => ({
    errors: errors.session,
    formType: 'signup'
});

const mapDTP = (dispatch) => ({
    processForm: user => dispatch(signup(user)), 
    otherForm: (
        <button onClick={() => dispatch(openModal('login'))} > 
            Login
        </button>
    ),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapSTP, mapDTP)(SessionForm);


