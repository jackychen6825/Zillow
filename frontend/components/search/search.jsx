import React from "react";
import Map from '../map/map';
import PropertyIndex from "../properties/properties_index"

const Search = ({ properties, updateFilter }) => (
    //map will now have access to all properties 
    //map component needs the updateBounds function to update the boundaries and rerender the appropriate markers 
    
    <div>
        <Map updateFilter={updateFilter} properties={properties} />
        <PropertyIndex properties={properties} />
    </div>
)
export default Search; 