import { EDIT_FORM_PROPERTY } from "../actions/property_form_actions";

export default function editReducer(state = null, action) {
    Object.freeze(state);
    switch (action.type) {
        case EDIT_FORM_PROPERTY:
            return action.property;
        default:
            return state;
    }
};