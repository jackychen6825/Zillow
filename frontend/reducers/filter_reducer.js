import { UPDATE_FILTER } from '../actions/filter_actions';

const defaultState = { bounds: {}, minPrice: 1, maxPrice: 10000000 }; 

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


