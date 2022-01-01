import { RECEIVE_LAT_LNG } from "../actions/property_form_actions";

export default function formReducer(state = {}, action) {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LAT_LNG:
            return action.latLngObj;
        default:
            return state;
    }
};