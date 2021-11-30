import React from "react";

const FilterForm = ({updateFilter}) => (
    <div>
        <label className='home-input-field'>Minimum Price</label><br/>
        <input onChange={updateFilter} className='session-input' type="text" /><br/>
        <label className='home-input-field'>Maximum Price</label><br/>
        <input onChange={updateFilter} className='session-input' type="text" />
    </div>
)

export default FilterForm;