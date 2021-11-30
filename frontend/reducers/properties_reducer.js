import { RECEIVE_PROPERTIES, RECEIVE_PROPERTY } from "../actions/property_actions";

const propertiesReducer = (state = {}, action) => {
    Object.freeze(state); 
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_PROPERTIES:
            return action.properties;
        case RECEIVE_PROPERTY:
            nextState[action.property.id] = action.property
            return nextState; 
        default:
            return state;
    }
}

export default propertiesReducer;