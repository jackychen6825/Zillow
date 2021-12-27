import { UPDATE_FILTER, CLEAR_FILTERS } from '../actions/filter_actions';

const defaultState = { bounds: {}, minPrice: 1, maxPrice: 10000000, minBeds: 0, minBaths: 0, address: '', searchType: '' }; 

export default function filterReducer(state = defaultState, action) {
    Object.freeze(state);
    let nextState = Object.assign({}, state); //copying the state to mutate 

    switch (action.type) {
        case UPDATE_FILTER:
            //key into filter and update it 
            nextState[action.filter] = action.value
            return nextState;  
        case CLEAR_FILTERS:
            return defaultState;
        default:
            return state;
    }
}


