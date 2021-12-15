import { connect } from "react-redux";
import Splash from "./splash";
import { updateFilter } from "../../actions/filter_actions";

const mDTP = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(null, mDTP)(Splash);