import { connect } from "react-redux";
import Search from "./search";
import { updateFilter } from "../../actions/filter_actions";

const mapSTP = ({ entities }) => ({
    properties: Object.values(entities.properties)
})

const mapDTP = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mapSTP, mapDTP)(Search);