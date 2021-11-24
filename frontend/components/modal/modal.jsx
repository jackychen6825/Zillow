import React from 'react'
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';

function Modal( {modal, closeModal} ) { //object destructuring from the mapSTP 
    if (!modal) { //modal = state.ui.modal if it's null, return nothing?
        return null 
    }

    let component; //initialize component var jsx component 
    switch (modal) {
        case 'login':
            component = <LoginFormContainer />
            break; //whats the break for?
        case 'signup':
            component = <SignupFormContainer />
            break; 
        default:
           return null;
    }

    return (
        <div className='modal-background' onClick={closeModal}>
            <div className='modal-child' onClick={e => e.stopPropagation()}> 
                { component }
            </div>
        </div>
    )
}

const mapSTP = state => ({
    modal: state.ui.modal //access to modal slice of state
});

const mapDTP = dispatch => ({
    closeModal: () => dispatch(closeModal()) //ability to close modal 
});

export default connect(mapSTP, mapDTP)(Modal);