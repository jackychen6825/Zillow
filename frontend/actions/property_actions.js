import * as APIUtil from "../util/property_api_util";

export const RECEIVE_PROPERTIES = "RECEIVE_PROPERTIES";
export const RECEIVE_PROPERTY = "RECEIVE_PROPERTY";

const receiveProperties = properties => ({
    type: RECEIVE_PROPERTIES,
    properties: properties
});

const receiveProperty = property => ({
    type: RECEIVE_PROPERTY,
    property: property
})

export const fetchProperties = (filters) => (dispatch) => (
    APIUtil.fetchProperties(filters) //updated api function to include bounds  
        .then(properties => dispatch(receiveProperties(properties)))
);

export const fetchProperty = id => dispatch => (
    APIUtil.fetchProperty(id)
        .then(property => dispatch(receiveProperty(property)))
); 

export const createProperty = property => dispatch => (
    APIUtil.createProperty(property)
        .then(property => dispatch(receiveProperty(property)))
);

export const updateProperty = (id, property) => dispatch => (
    APIUtil.updateProperty(id, property)
        .then(property => dispatch(receiveProperty(property)))
);


