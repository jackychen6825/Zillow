import { connect } from "react-redux";
import Map from "./map";

const mSTP = state => ({
    filters: state.ui.filters,
    address: state.ui.filters.address,
    currentProperty: state.ui.currentProperty,
})

const mDTP = dispatch => ({
})

export default connect(mSTP, mDTP)(Map);