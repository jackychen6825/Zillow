import { connect } from "react-redux";
import PropertyShow from './property_show';
import { makeSave, removeSave } from "../../actions/save_actions";
import { openModal } from '../../actions/modal_actions';

const mapSTP = state => ({
    property: state.ui.modal.property,
    currentUser: state.entities.users[state.session.id]
});

const mapDTP = dispatch => ({
    makeSave: data => dispatch(makeSave(data)),
    removeSave: id => dispatch(removeSave(id)),
    openModal: (modal, property) => dispatch(openModal(modal, property))
})

export default connect(mapSTP, mapDTP)(PropertyShow); 