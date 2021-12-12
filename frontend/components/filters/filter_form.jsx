import React, { Component } from 'react'

export default class FilterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            priceOpen: "",
            bathsOpen: "",
            bedsOpen: ""
        }

        this.toggleDropdown = this.toggleDropdown.bind(this);
    }

    toggleDropdown(field) {
        return e => {
            e.stopPropagation();
            e.preventDefault();
            this.setState({
                priceOpen: false,
                bathsOpen: false,
                bedsOpen: false
            })
            const bool = this.state[field]
            this.setState({
                [field]: !bool
            })
        }
    }

    handleChange = (filter, updateFilter) => (e) => (
        updateFilter(filter, parseInt(e.target.value))
    ); 

    render() {
        const { minPrice, maxPrice, minBeds, minBaths, updateFilter, removeFilters } = this.props;
        return (
            <div className='filter-container'>
                <div className='price-filter-container'>
                    <button className='filter-btn' onClick={this.toggleDropdown('priceOpen')}>Price</button>
                    <div className={this.state.priceOpen ? "show-filter-price" : "hide-filter"}>
                        <label className='home-input-field'>Minimum Price</label><br />
                        <input
                            onChange={this.handleChange('minPrice', updateFilter)}
                            className='filter-input'
                            type="number"
                            value={minPrice} /><br />
                        <label className='home-input-field'>Maximum Price</label><br />
                        <input
                            onChange={this.handleChange('maxPrice', updateFilter)}
                            className='filter-input'
                            type="number"
                            value={maxPrice} />
                    </div>
                </div>

                <button onClick={this.toggleDropdown('bedsOpen')} className='filter-btn'>Beds</button>
                <div className={this.state.bedsOpen ? 'show-filter-beds' : 'hide-filter'}>
                    <div className='filter-label'>Bedrooms</div>
                    <div className='filter-btn-container'>
                        <button className='bed-filter-btn' value='1' onClick={this.handleChange('minBeds', updateFilter)}>1+</button>
                        <button className='bed-filter-btn' value='2' onClick={this.handleChange('minBeds', updateFilter)}>2+</button>
                        <button className='bed-filter-btn' value='3' onClick={this.handleChange('minBeds', updateFilter)}>3+</button>
                        <button className='bed-filter-btn' value='4' onClick={this.handleChange('minBeds', updateFilter)}>4+</button>
                        <button className='bed-filter-btn' value='5' onClick={this.handleChange('minBeds', updateFilter)}>5+</button>
                    </div>
                </div>



                <button onClick={this.toggleDropdown('bathsOpen')} className='filter-btn'>Baths</button>
                <div className={this.state.bathsOpen ? 'show-filter-baths' : 'hide-filter'}>
                    <div className='filter-label'>Bathrooms</div>
                    <div className='filter-btn-container'>
                        <button className='bed-filter-btn' value='1' onClick={this.handleChange('minBaths', updateFilter)}>1+</button>
                        <button className='bed-filter-btn' value='2' onClick={this.handleChange('minBaths', updateFilter)}>2+</button>
                        <button className='bed-filter-btn' value='3' onClick={this.handleChange('minBaths', updateFilter)}>3+</button>
                        <button className='bed-filter-btn' value='4' onClick={this.handleChange('minBaths', updateFilter)}>4+</button>
                        <button className='bed-filter-btn' value='5' onClick={this.handleChange('minBaths', updateFilter)}>5+</button>
                    </div>
                </div>
                
                <button onClick={removeFilters} className='filter-btn'>Clear</button>
                
            </div>
        )
    }
}