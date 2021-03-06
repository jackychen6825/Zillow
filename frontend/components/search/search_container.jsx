import { connect } from "react-redux";
import Search from "./search";
import { updateFilter, removeFilters, changeFilter } from "../../actions/filter_actions";
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
    removeFilters: (remainingFilter) => dispatch(removeFilters(remainingFilter)),
    openModal: (modal, property) => dispatch(openModal(modal, property)),
    changeFilter: (filter, value) => dispatch(changeFilter(filter, value))
})

export default connect(mapSTP, mapDTP)(Search);