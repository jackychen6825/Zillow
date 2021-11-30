import React from "react";

const handleChange = (filter, updateFilter) => (e) => (
    updateFilter(filter, parseInt(e.target.value))
); 

const FilterForm = ({ minPrice, maxPrice, updateFilter }) => (
    <div>
        <label className='home-input-field'>Minimum Price</label><br />
        <input
            onChange={handleChange('minPrice', updateFilter)}
            className='session-input'
            type="number"
            value={minPrice} /><br />
        <label className='home-input-field'>Maximum Price</label><br />
        <input
            onChange={handleChange('maxPrice', updateFilter)}
            className='session-input'
            type="number"
            value={maxPrice} />
    </div>
) 

export default FilterForm;