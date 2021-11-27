import { RECEIVE_PROPERTIES } from "../actions/property_actions";

const propertiesReducer = (state = {}, action) => {
    Object.freeze(state); 

    switch (action.type) {
        case RECEIVE_PROPERTIES:
            return action.properties;
    
        default:
            return state;
    }
}

export default propertiesReducer;