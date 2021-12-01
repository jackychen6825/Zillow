import { connect } from "react-redux";
import PropertyIndex from './properties_index';
import { openModal } from '../../actions/modal_actions';

const mapSTP = ({ entities }) => ({
    properties: Object.values(entities.properties) 
})

const mapDTP = dispatch => {
    return {
    openModal: modal => dispatch(openModal(modal))
}}

export default connect(mapSTP, mapDTP)(PropertyIndex); 