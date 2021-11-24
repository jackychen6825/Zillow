import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

export default function modalReducer(state = null, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return action.modal; //tells us which modal to render
        case CLOSE_MODAL:
            return null //sets the state to null 
        default:
            return state;
    }
}