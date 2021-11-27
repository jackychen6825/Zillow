import React from "react";
import Map from '../map/map';
import PropertyIndex from "../properties/properties_index"

const Search = ({ properties, fetchProperties, updateBounds }) => (
    //map will now have access to all properties 
    //map component needs the updateBounds function to update the boundaries and rerender the appropriate markers 
    
    <div>
        <Map updateBounds={updateBounds} properties={properties} />
        <PropertyIndex properties={properties} fetchProperties={fetchProperties} />
    </div>
)
export default Search; 