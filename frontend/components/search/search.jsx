import Map from '../map/map';
import MapContainer from '../map/map_container'
import PropertyIndexContainer from "../properties/properties_index_container";
import FilterForm from "../filters/filter_form";
import React, { Component } from 'react'

export default class Search extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        //changing the filter w/o fetching properties
        this.props.changeFilter('searchType', 'buy')
    }

    render() {
        const { properties, updateFilter, removeFilters, minPrice, maxPrice, minBeds, minBaths, openModal } = this.props;
        return (
            <div>
                <FilterForm searchType={'buy'} minPrice={minPrice} maxPrice={maxPrice} minBeds={minBeds} minBaths={minBaths} updateFilter={updateFilter} removeFilters={removeFilters}/>
                <div className='index-container'>
                    <MapContainer updateFilter={updateFilter} properties={properties} openModal={openModal} />
                    <PropertyIndexContainer />
                </div>
            </div>
        )
    }
}
