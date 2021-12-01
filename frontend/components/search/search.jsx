import React from "react";
import Map from '../map/map';
import PropertyIndexContainer from "../properties/properties_index_container";
import FilterForm from "../filters/filter_form";

const Search = ({ properties, updateFilter, minPrice, maxPrice }) => (
    //map will now have access to all properties 
    //map component needs the updateBounds function to update the boundaries and rerender the appropriate markers 
    
    <div>
        <FilterForm minPrice={minPrice} maxPrice={maxPrice} updateFilter={updateFilter} />
        <div className='index-container'>
            <Map updateFilter={updateFilter} properties={properties} />
            <PropertyIndexContainer />
        </div>
    </div>
)
export default Search; 