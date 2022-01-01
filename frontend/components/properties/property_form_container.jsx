import { connect } from "react-redux";
import PropertyForm from "./property_form";
import { createProperty } from '../../actions/property_actions';

const mstp = state => ({
    lat: state.ui.form.lat,
    lng: state.ui.form.lng
})

const mdtp = dispatch =>  ({
    createProperty: property => dispatch(createProperty(property))
})

export default connect(mstp, mdtp)(PropertyForm); 