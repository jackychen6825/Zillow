import { EDIT_FORM_PROPERTY, RESET_EDIT_FORM } from "../actions/property_form_actions";

export default function editReducer(state = null, action) {
    Object.freeze(state);
    switch (action.type) {
        case EDIT_FORM_PROPERTY:
            return action.property;
        case RESET_EDIT_FORM:
            return null;
        default:
            return state;
    }
};