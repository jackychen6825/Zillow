import { connect } from "react-redux";
import { fetchProperty } from '../../actions/property_actions';
import PropertyShow from './property_show';

const mstp = state => {
    const propertyId = parseInt(state.match.params.propertyId);
    
    return {
        propertyId: propertyId,
        property: state.entities.properties[propertyId]
    } 
}; 

const mdtp = dispatch => ({
    fetchProperty: id => dispatch(fetchProperty(id))
});

export default connect(mstp, mdtp)(PropertyShow); 