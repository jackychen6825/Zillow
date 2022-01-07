export const RECEIVE_LAT_LNG = "RECEIVE_LAT_LNG";
export const EDIT_FORM_PROPERTY = 'EDIT_FORM_PROPERTY';

//dispatch this to the state --> ui --> form: {lat: 37:123213 lng: -122.123123}
export const receiveLatLng = latLngObj => ({
    type: RECEIVE_LAT_LNG,
    latLngObj
});

export const receiveEditFormProperty = property => ({
    type: EDIT_FORM_PROPERTY,
    property
})
