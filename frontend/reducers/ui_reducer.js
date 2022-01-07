import { combineReducers } from "redux";

import modal from './modal_reducer'; //can import it as anything because of export default on the associated pg
import filters from './filter_reducer';
import currentProperty from './current_property_reducer';
import form from './form_reducer';
import edit from './edit_reducer';

export default combineReducers({
    modal,
    filters,
    currentProperty,
    form,
    edit,
});