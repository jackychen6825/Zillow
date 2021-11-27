import { connect } from "react-redux";
import Search from "./search";
import { fetchProperties } from "../../actions/property_actions";
import { updateBounds } from "../../actions/filter_actions";


const mapSTP = ({ entities }) => ({
    //allows props access to all properties 
    //properties: {1:{}, 2:{}, 3:{}}
    //[{},{},{}]
    properties: Object.values(entities.properties)
})

// state: {entities: {}}
const mapDTP = dispatch => ({
    //will allow the component to fetch the properties and change the state once it mounts 
    fetchProperties: () => dispatch(fetchProperties()),
    updateBounds: bounds => dispatch(updateBounds(bounds))
})

export default connect(mapSTP, mapDTP)(Search);