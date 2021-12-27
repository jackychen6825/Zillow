import React, { Component } from 'react'

export default class FilterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: '',
            priceOpen: "",
            bathsOpen: "",
            bedsOpen: "",
            minBeds: "",
            minBaths: ""
        }

        this.toggleDropdown = this.toggleDropdown.bind(this);
        this.handleClear = this.handleClear.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.onPlaceChanged = this.onPlaceChanged.bind(this);
    }

    componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('autocomplete-filter'), 
            { componentRestrictions: { 'country': ['us'] } }
        )

        this.autocomplete.addListener('place_changed', this.onPlaceChanged)
    }

    onPlaceChanged(e) {
        let place = this.autocomplete.getPlace();
        
        if (!place.geometry) {
            document.getElementById('autocomplete').placeholder = 'Address, neighborhood, or ZIP'
        } else {
            this.setState({ search: place.formatted_address })
        }
    }

    handleClick(e) {
        e.preventDefault() 
        this.props.updateFilter('address', this.state.search)
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

    handleChange = (filter, updateFilter) => (e) => {
        this.setState({ [filter]: parseInt(e.target.value) })
        updateFilter(filter, parseInt(e.target.value))
    } 

    handleClear(e) {
        e.stopPropagation();
        e.preventDefault();
        this.setState({
            priceOpen: false,
            bathsOpen: false,
            bedsOpen: false,
            minBeds: "",
            minBaths: ""
        })
        this.props.removeFilters()
    }

    render() {
        const { minPrice, maxPrice, minBeds, minBaths, updateFilter, removeFilters } = this.props;
        return (
            <div className='filter-container'>
                <div className="search-bar-container-filter">
                    <input 
                        type="text"
                        id="autocomplete-filter"
                        placeholder='Enter an address, city, neighborhood, or ZIP code'
                    />
                    <button className="search-btn-filter" onClick={this.handleClick}><i className="fas fa-search"></i></button>
                </div>
                <div className='price-filter-container'>
                    <button className='filter-btn' onClick={this.toggleDropdown('priceOpen')}>Price</button>
                    <div className={this.state.priceOpen ? "show-filter-price" : "hide-filter"}>
                        <label className='home-input-field'>Min Price</label><br />
                        <input
                            onChange={this.handleChange('minPrice', updateFilter)}
                            className='filter-input'
                            type="number"
                            value={minPrice} /><br />
                        <label className='home-input-field'>Max Price</label><br />
                        <input
                            onChange={this.handleChange('maxPrice', updateFilter)}
                            className='filter-input'
                            type="number"
                            value={maxPrice} />
                    </div>
                </div>

                <button onClick={this.toggleDropdown('bedsOpen')} className='filter-btn'>{this.state.minBeds === "" ? 'Beds' : `${this.state.minBeds}+ beds`}</button>
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



                <button onClick={this.toggleDropdown('bathsOpen')} className='filter-btn'>{this.state.minBaths === "" ? 'Baths' : `${this.state.minBaths}+ baths`}</button>
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
                
                <button onClick={this.handleClear} className='filter-btn'>Clear</button>
                
            </div>
        )
    }
}