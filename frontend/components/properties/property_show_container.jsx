import { connect } from "react-redux";
import PropertyShow from './property_show';

const mapSTP = state => ({
    property: state.ui.modal.property
});

export default connect(mapSTP, null)(PropertyShow); 