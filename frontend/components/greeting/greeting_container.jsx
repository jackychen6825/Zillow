import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import Greeting from "./greeting";

const mapSTP = ({ session, entities }) => ({
    currentUser: entities.users[session.id]
});

const mapDTP = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mapSTP, mapDTP)(Greeting); 

