import { UPDATE_FILTER, CLEAR_FILTERS } from '../actions/filter_actions';

const defaultState = { bounds: {}, minPrice: '', maxPrice: '', minBeds: 0, minBaths: 0, address: '', searchType: '' }; 

export default function filterReducer(state = defaultState, action) {
    Object.freeze(state);
    let nextState = Object.assign({}, state); //copying the state to mutate 

    switch (action.type) {
        case UPDATE_FILTER:
            nextState[action.filter] = action.value
            return nextState;  
        case CLEAR_FILTERS:
            //keep the current boundaries 
            let bounds = state.bounds;
            return Object.assign({}, defaultState, { searchType: action.remainingFilter }, { bounds })
        default:
            return state;
    }
}


