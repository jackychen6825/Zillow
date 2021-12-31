import { RECEIVE_CURRENT_PROPERTY_ID } from '../actions/current_property_actions';

export default function currentPropertyReducer(state = '', action) {
    Object.freeze(state)
    switch(action.type) {
        case RECEIVE_CURRENT_PROPERTY_ID:
            return action.property.id;
        default:
            return state;
    }
}