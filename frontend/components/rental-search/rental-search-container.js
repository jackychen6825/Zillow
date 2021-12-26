import React from "react";
import MapContainer from '../map/map_container'
import PropertyIndexContainer from "../properties/properties_index_container";
import FilterForm from "../filters/filter_form";

const RentalSearch = ({ properties, updateFilter, removeFilters, minPrice, maxPrice, minBeds, minBaths, openModal }) => (
    <div>
        <FilterForm minPrice={minPrice} maxPrice={maxPrice} minBeds={minBeds} minBaths={minBaths} updateFilter={updateFilter} removeFilters={removeFilters}/>
        <div className='index-container'>
            <MapContainer updateFilter={updateFilter} properties={properties} openModal={openModal} />
            <PropertyIndexContainer />
        </div>
    </div>
)
export default Search; 