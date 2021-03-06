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
        this.handlePriceClick = this.handlePriceClick.bind(this);
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

    //grab the specific filter and the update filter function - however needs an event 
    handleChange = (filter, updateFilter) => (e) => {
        //for displaying value on the input
        this.setState({ [filter]: parseInt(e.target.value) })
        //change the filter on the filter slice of state and fetch properties with new filters 
        updateFilter(filter, parseInt(e.target.value))
    } 

    //same exact thing as handleChange above but does not parse int becuase you cannot parse int an integer 
    handlePriceClick = (filter, updateFilter) => (e) => {
        //for displaying value on the input
        this.setState({ [filter]: e.target.value })
        //change the filter on the filter slice of state and fetch properties with new filters 
        updateFilter(filter, e.target.value)
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
        this.props.removeFilters(this.props.searchType)
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
                    <div onMouseLeave={this.toggleDropdown('priceOpen')} className={this.state.priceOpen ? "show-filter-price" : "hide-filter"}>
                        <div className="price-filter-inputs-container">
                            <input
                                readOnly={true}
                                className='filter-input-price'
                                type="number"
                                placeholder='Min'
                                value={minPrice} />
                            <div className="price-filter-sep"> - </div>
                            <input
                                readOnly={true}
                                className='filter-input-price'
                                type="number"
                                placeholder='Max'
                                value={maxPrice} />
                        </div>
                        <div className="price-filter-buttons-container-min">
                            <button onClick={this.handlePriceClick('minPrice', updateFilter)} value={0} className="price-filter-btns">0+</button>
                            <button onClick={this.handlePriceClick('minPrice', updateFilter)} value={100000} className="price-filter-btns">$100,000+</button>
                            <button onClick={this.handlePriceClick('minPrice', updateFilter)} value={200000} className="price-filter-btns">$200,000+</button>
                            <button onClick={this.handlePriceClick('minPrice', updateFilter)} value={300000} className="price-filter-btns">$300,000+</button>
                            <button onClick={this.handlePriceClick('minPrice', updateFilter)} value={400000} className="price-filter-btns">$400,000+</button>
                            <button onClick={this.handlePriceClick('minPrice', updateFilter)} value={500000} className="price-filter-btns">$500,000+</button>
                        </div>
                        <div className="price-filter-buttons-container-max">
                            <button onClick={this.handlePriceClick('maxPrice', updateFilter)} value={1000000} className="price-filter-btns">$1,000,000+</button>
                            <button onClick={this.handlePriceClick('maxPrice', updateFilter)} value={2000000} className="price-filter-btns">$2,000,000+</button>
                            <button onClick={this.handlePriceClick('maxPrice', updateFilter)} value={3000000} className="price-filter-btns">$3,000,000+</button>
                            <button onClick={this.handlePriceClick('maxPrice', updateFilter)} value={4000000} className="price-filter-btns">$4,000,000+</button>
                            <button onClick={this.handlePriceClick('maxPrice', updateFilter)} value={5000000} className="price-filter-btns">$5,000,000+</button>
                            <button onClick={this.handlePriceClick('maxPrice', updateFilter)} value={6000000} className="price-filter-btns">$6,000,000+</button>
                        </div>
                    </div>
                </div>

                <button onClick={this.toggleDropdown('bedsOpen')} className='filter-btn'>{this.state.minBeds === "" ? 'Beds' : `${this.state.minBeds}+ beds`}</button>
                <div onMouseLeave={this.toggleDropdown('bedsOpen')} className={this.state.bedsOpen ? 'show-filter-beds' : 'hide-filter'}>
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
                <div onMouseLeave={this.toggleDropdown('bathsOpen')} className={this.state.bathsOpen ? 'show-filter-baths' : 'hide-filter'}>
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