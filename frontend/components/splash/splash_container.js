import { connect } from "react-redux";
import Splash from "./splash";
import { updateFilter } from "../../actions/filter_actions";
import { openModal } from "../../actions/modal_actions";

const mSTP = ({ entities, session }) => ({
    currentUser: entities.users[session.id]
})

const mDTP = dispatch => ({
    openModal: (modal, property) => dispatch(openModal(modal, property)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mSTP, mDTP)(Splash);