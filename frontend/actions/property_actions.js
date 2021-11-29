import * as APIUtil from "../util/property_api_util";

export const RECEIVE_PROPERTIES = "RECEIVE_PROPERTIES";

const receiveProperties = properties => ({
    type: RECEIVE_PROPERTIES,
    properties: properties
});


export const fetchProperties = (bounds) => (dispatch) => (
    APIUtil.fetchProperties(bounds) //updated api function to include bounds  
        .then(properties => dispatch(receiveProperties(properties)))
);


