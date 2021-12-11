import React from "react";

const handleChange = (filter, updateFilter) => (e) => (
    updateFilter(filter, parseInt(e.target.value))
); 

const FilterForm = ({ minPrice, maxPrice, minBeds, minBaths, updateFilter }) => (

    <div className='filter-container'>
        <label className='home-input-field'>Minimum Price</label><br />
        <input
            onChange={handleChange('minPrice', updateFilter)}
            className='filter-input'
            type="number"
            value={minPrice} /><br />
        <label className='home-input-field'>Maximum Price</label><br />
        <input
            onChange={handleChange('maxPrice', updateFilter)}
            className='filter-input'
            type="number"
            value={maxPrice} />
        <label className='home-filter-field'>Minimum Beds
            <input
            onChange={handleChange('minBeds', updateFilter)}
            className='filter-input'
            type="number"
            value={minBeds} />
        </label>
        <label className='home-filter-field'>Minimum Bathrooms
            <input
            onChange={handleChange('minBaths', updateFilter)}
            className='filter-input'
            type="number"
            value={minBaths} />
        </label>
    </div>
) 

export default FilterForm;