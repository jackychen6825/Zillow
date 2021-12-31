export const RECEIVE_CURRENT_PROPERTY_ID = "RECEIVE_CURRENT_PROPERTY_ID";
export const RESET_CURRENT_PROPERTY = "RESET_CURRENT_PROPERTY";

export const receiveCurrentProperty = property => ({
    type: RECEIVE_CURRENT_PROPERTY_ID,
    property
});

export const resetCurrentProperty = () => ({
    type: RESET_CURRENT_PROPERTY
})