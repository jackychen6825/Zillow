import { connect } from "react-redux";
import PropertyIndex from './properties_index';
import { openModal } from '../../actions/modal_actions';
import { makeSave, removeSave } from "../../actions/save_actions";
import { receiveCurrentProperty } from "../../actions/current_property_actions";

const mapSTP = ({ entities, session }) => ({
    properties: Object.values(entities.properties),
    currentUser: entities.users[session.id]
})

const mapDTP = dispatch => {
    return {
        makeSave: data => dispatch(makeSave(data)),
        removeSave: id => dispatch(removeSave(id)),
        openModal: (modal, property) => dispatch(openModal(modal, property)),
        receiveCurrentProperty: propertyId => dispatch(receiveCurrentProperty(propertyId))
}}

export default connect(mapSTP, mapDTP)(PropertyIndex); 