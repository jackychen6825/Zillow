import { connect } from "react-redux";
import Saved from  './saved';
import { fetchProperties } from "../../actions/property_actions";
import { openModal } from "../../actions/modal_actions";
import { makeSave, removeSave } from '../../actions/save_actions';

const mSTP = ({ entities, session }) => ({
    currentUser: entities.user[session.id],
    saves: entities.user[session.id].saves, 
    properties: Object.values(entities.properties)
});

const mDTP = dispatch => ({
    fetchProperties: filters => dispatch(fetchProperties(filters)), 
    openModal: modalType => dispatch(openModal(modalType)),
    makeSave: data => dispatch(makeSave(data)),
    removeSave: id => dispatch(removeSave(id))
})

export default connect(mSTP, mDTP)(Saved);