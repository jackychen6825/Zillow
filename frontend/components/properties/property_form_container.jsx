import { connect } from "react-redux";
import PropertyForm from "./property_form";
import { createProperty, updateProperty } from '../../actions/property_actions';
import { resetEditForm } from "../../actions/property_form_actions";

const mstp = state => ({
    lat: state.ui.form.lat,
    lng: state.ui.form.lng,
    property: state.ui.edit,
})

const mdtp = dispatch =>  ({
    createProperty: property => dispatch(createProperty(property)),
    updateProperty: (id, property) => dispatch(updateProperty(id, property)),
    resetEditForm: () => dispatch(resetEditForm()), //when the form component unmounts, it will set the edit slice of state to null for future form renderings 
})

export default connect(mstp, mdtp)(PropertyForm); 