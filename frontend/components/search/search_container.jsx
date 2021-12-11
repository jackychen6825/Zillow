import { connect } from "react-redux";
import Search from "./search";
import { updateFilter } from "../../actions/filter_actions";
import { openModal } from "../../actions/modal_actions";

const mapSTP = ({ entities, ui }) => ({
    properties: Object.values(entities.properties),
    minPrice: ui.filters.minPrice,
    maxPrice: ui.filters.maxPrice,
    minBeds: ui.filters.minBeds,
    minBaths: ui.filters.minBaths,
})

const mapDTP = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    openModal: (modal, property) => dispatch(openModal(modal, property))
})

export default connect(mapSTP, mapDTP)(Search);