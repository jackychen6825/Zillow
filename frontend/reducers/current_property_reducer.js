import { RECEIVE_CURRENT_PROPERTY_ID, RESET_CURRENT_PROPERTY } from '../actions/current_property_actions';

export default function currentPropertyReducer(state = '', action) {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_CURRENT_PROPERTY_ID:
            return action.property.id;
        case RESET_CURRENT_PROPERTY:
            return "";
        default:
            return state;
    }
}