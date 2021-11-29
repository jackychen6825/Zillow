import { UPDATE_FILTER } from '../actions/filter_actions';

const defaultState = { bounds: {} }; 

export default function filterReducer(state = defaultState, action) {
    Object.freeze(state);
    let nextState = Object.assign({}, state); //copying the state to mutate 

    switch (action.type) {
        case UPDATE_FILTER:
            nextState[action.filter] = action.value
            return nextState;  
        default:
            return state;
    }
}


