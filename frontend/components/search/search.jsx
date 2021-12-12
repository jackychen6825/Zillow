import React from "react";
import Map from '../map/map';
import PropertyIndexContainer from "../properties/properties_index_container";
import FilterForm from "../filters/filter_form";

const Search = ({ properties, updateFilter, removeFilters, minPrice, maxPrice, minBeds, minBaths, openModal }) => (
    //map will now have access to all properties 
    //map component needs the updateBounds function to update the boundaries and rerender the appropriate markers 
    
    <div>
        <FilterForm minPrice={minPrice} maxPrice={maxPrice} minBeds={minBeds} minBaths={minBaths} updateFilter={updateFilter} removeFilters={removeFilters}/>
        <div className='index-container'>
            <Map updateFilter={updateFilter} properties={properties} openModal={openModal} />
            <PropertyIndexContainer />
        </div>
    </div>
)
export default Search; 