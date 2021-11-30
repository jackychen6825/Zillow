import { connect } from "react-redux";
import Search from "./search";
import { updateFilter } from "../../actions/filter_actions";

const mapSTP = ({ entities, ui }) => ({
    properties: Object.values(entities.properties),
    minPrice: ui.filters.minPrice,
    maxPrice: ui.filters.maxPrice
})

const mapDTP = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
})

export default connect(mapSTP, mapDTP)(Search);