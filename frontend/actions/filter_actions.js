import { fetchProperties } from '../actions/property_actions'; 

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const CLEAR_FILTERS = 'CLEAR_FILTERS'

export const changeFilter = (filter, value) => ({
    type: UPDATE_FILTER,
    filter: filter, 
    value: value
})

const clearFilters = (remainingFilter) => ({
    type: CLEAR_FILTERS, 
    remainingFilter
})

export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    return fetchProperties(getState().ui.filters)(dispatch);
};

export const removeFilters = (remainingFilter) => (dispatch, getState) => {
    debugger
    dispatch(clearFilters(remainingFilter));
    return fetchProperties(getState().ui.filters)(dispatch);
}
