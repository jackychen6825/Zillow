import { fetchProperties } from '../actions/property_actions'; 

export const UPDATE_FILTER = 'UPDATE_FILTER';

// export const updateBounds = bounds => ({
//     type: UPDATE_BOUNDS,
//     bounds: bounds
// })

const changeFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter: filter, 
    value: value
})

//changing updateBounds action creator into a thunk action creator --

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchProperties(getState().ui.filters)(dispatch);
};
