import { connect } from "react-redux";
import PropertyForm from "./property_form";
import { createProperty, updateProperty } from '../../actions/property_actions';

const mstp = state => ({
    lat: state.ui.form.lat,
    lng: state.ui.form.lng,
    property: state.ui.edit,
})

const mdtp = dispatch =>  ({
    createProperty: property => dispatch(createProperty(property)),
    updateProperty: (id, property) => dispatch(updateProperty(id, property)) 
})

export default connect(mstp, mdtp)(PropertyForm); 