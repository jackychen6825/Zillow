import { connect } from "react-redux";
import PropertyIndex from './properties_index';

const mapSTP = ({ entities }) => ({
    //allows props access to all properties 
    //properties: {1:{}, 2:{}, 3:{}}
    //[{},{},{}]
    properties: Object.values(entities.properties) 
})

// state: {entities: {}}
const mapDTP = dispatch => ({
    //will allow the component to fetch the properties and change the state once it mounts 
    fetchProperties: () => dispatch(fetchProperties())
})

export default connect(mapSTP, mapDTP)(PropertyIndex); 