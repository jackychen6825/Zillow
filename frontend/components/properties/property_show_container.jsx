import { connect } from "react-redux";
import PropertyShow from './property_show';

const mstp = ({ ui: { modal: property} }) => ({
    property: property
});

export default connect(mstp, null)(PropertyShow); 