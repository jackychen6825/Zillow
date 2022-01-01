export const RECEIVE_LAT_LNG = "RECEIVE_LAT_LNG";

//dispatch this to the state --> ui --> form: {lat: 37:123213 lng: -122.123123}
export const receiveLatLng = latLngObj => ({
    type: RECEIVE_LAT_LNG,
    latLngObj
});