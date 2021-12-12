import { createSave, deleteSave } from '../util/saves_api_util';
import { show } from '../util/session_api_util';

export const RECEIVE_SAVE = 'RECEIVE_SAVE';

export const recieveSave = currentUser => ({
    type: RECEIVE_SAVE,
    currentUser
});

export const makeSave = data => dispatch => {
    createSave(data) //creates the save with the passed in data in the backend 
        .then(save => { //returns a save object 
            show(save.user_id)  //finds the user with that the user id from the saved object 
                .then(user => dispatch(recieveSave(user))) //dispatch the user to the user slice of state 
        })
}

export const removeSave = propertyId => dispatch => {
    deleteSave(propertyId)
        .then(save => {
            show(save.user_id)
                .then(user => dispatch(recieveSave(user)))
        })
}