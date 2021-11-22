import * as ApiUtil from '../util/session_api_util'; 

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_ERRORS';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';


//action creators 
const receiveCurrentUser = currentUser => ({
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
});

const logoutCurrentUser = () => ({
    type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors 
});

//thunk action creators 
export const login = user => dispatch => (
    ApiUtil.login(user)
        .then(
            currentUser => (dispatch(receiveCurrentUser(currentUser))), 
            errors => (dispatch(receiveErrors(errors.responseJSON)))
        )
)

export const logout = () => dispatch => (
    ApiUtil.logout()
        .then(user => dispatch(logoutCurrentUser()))
)

export const signup = user => dispatch => (
    ApiUtil.signup(user)
        .then(
            currentUser => (dispatch(receiveCurrentUser(currentUser))),
            errors  => dispatch(receiveErrors(errors.responseJSON))
        )
)
