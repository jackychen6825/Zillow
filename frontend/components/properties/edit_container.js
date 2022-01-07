import { connect } from "react-redux";
import Edit from  './edit';
import { fetchProperties } from "../../actions/property_actions";
import { receiveEditFormProperty } from "../../actions/property_form_actions";

const mSTP = ({ entities, session }) => ({
    currentUser: entities.users[session.id],
    properties: Object.values(entities.properties)
});

const mDTP = dispatch => ({
    fetchProperties: filters => dispatch(fetchProperties(filters)), 
    receiveEditFormProperty: property => dispatch(receiveEditFormProperty(property))
})

export default connect(mSTP, mDTP)(Edit);