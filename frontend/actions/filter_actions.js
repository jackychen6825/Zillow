import { fetchProperties } from '../actions/property_actions'; 

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const CLEAR_FILTERS = 'CLEAR_FILTERS'

// export const updateBounds = bounds => ({
//     type: UPDATE_BOUNDS,
//     bounds: bounds
// })

export const changeFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter: filter, 
    value: value
})

const clearFilters = () => ({
    type: CLEAR_FILTERS
})

//changing updateBounds action creator into a thunk action creator --

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchProperties(getState().ui.filters)(dispatch);
};

export const removeFilters = () => (dispatch, getState) => {
    dispatch(clearFilters());
    return fetchProperties(getState().ui.filters)(dispatch);
}
