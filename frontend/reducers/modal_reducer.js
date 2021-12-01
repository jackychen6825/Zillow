import { OPEN_MODAL, CLOSE_MODAL } from "../actions/modal_actions";

export default function modalReducer(state = {}, action) {
    
    switch (action.type) {
        case OPEN_MODAL:
            return { modalType: action.modalType, property: action.property }
        case CLOSE_MODAL:
            return { modalType: null, property: null }
        default:
            return state;
    }
}