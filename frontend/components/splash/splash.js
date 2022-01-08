import React, { Component } from 'react'

export default class Splash extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }

        this.onPlaceChanged = this.onPlaceChanged.bind(this)
        this.navigatetoSearch = this.navigatetoSearch.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.navigateToSell =  this.navigateToSell.bind(this)
        this.navigateToRent = this.navigateToRent.bind(this)
    }

    componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(
            document.getElementById('autocomplete'), 
            { componentRestrictions: { 'country': ['us'] }}
        ) 

        this.autocomplete.addListener('place_changed', this.onPlaceChanged)
    }

    onPlaceChanged(e) {
        let place = this.autocomplete.getPlace();

        if (!place.geometry) {
            document.getElementById('autocomplete').placeholder = 'Enter an address, city, neighborhood, or ZIP code';
        } else {
            this.setState({ search: place.formatted_address })
        }
    }

    navigatetoSearch(){
        this.props.history.push('/buy')
    }

    navigateToRent() {
        this.props.history.push('/rental')
    }

    navigateToSell()  {
        this.props.history.push('/properties/new')
    }

    handleClick(e) {
        e.preventDefault();
        this.props.updateFilter('address', this.state.search);
        this.navigatetoSearch()
    }

    

    render() {
        const { currentUser, openModal } = this.props; 

        return (
            <div className="splash-container">
                <div className="splash-image-container">
                    <img 
                        className="splash-image" 
                        src="https://lh3.googleusercontent.com/D8dlomz1zsC0rhUes8u_OUz7oRg_wOEqYffvTD0kbS4pia8_IXjz96u27GpgrjT4S4Fd2iihQJfhf5bgdfFW3xj5TkiZT_fanVvlrp3nO4GfDR_qk0svdqwkvxtBUiFRxbWYa3PhTA=w2400" 
                        alt="" 
                    />
                </div>
                <div className="splash-text-container">
                    <p className="splash-text">Change starts here</p>
                </div>
                <div className="search-bar-container">
                    <input 
                        type="text"
                        id="autocomplete"
                        placeholder='Enter an address, city, neighborhood, or ZIP code'
                    />
                    <button className="search-btn" onClick={this.handleClick}><i className="fas fa-search fa-2x"></i></button>
                </div>

                <div className="splash-nav-container">
                    <div className="splash-nav-text">
                        <div>Whether you’re buying, selling or renting,</div> 
                        <div>we can help you move forward.</div> 
                    </div>
                    <div onClick={this.navigatetoSearch} className="splash-nav">
                        <img src="https://lh3.googleusercontent.com/VVCVW9QmGBkBLymMHY3v0Khv4gxB9jyrRVIwDud8qPedU4nINdmSa5Rwvng24g3Sr7PI9L-5KrB8l-3Tkj_nw6zcbdBVFNY5_MD8xbjj8ixZqVzd2hSLAEfARnHHDFyaDgf4FH1mng=w2400" alt="" />
                        <p className="upper-splash-nav-text">Buy a home</p>
                        <p className="lower-splash-nav-text">Find your place with an immersive photo experience and the most listings, including things you won't find anywhere else</p>
                        <button className="splash-nav-btn">Search homes</button>
                    </div>
                    <div onClick={currentUser ? this.navigateToSell : () => openModal('login')} className="splash-nav">
                        <img src="https://lh3.googleusercontent.com/qDlNY7qw_uX2k2b62fKEBIl05nAlBH0RcPfvH-8zO6Cs22ZOaTJVZM20-bC2Tjz8DRFBxBZIulDbKo4f9RRgP7KYVFNPmqgu2iNUA0h09NS4rH9gJVpZ-i87Ar73eUayljNbAswgjg=w2400" alt="" />
                        <p className="upper-splash-nav-text">Sell a home</p>
                        <p className="lower-splash-nav-text">No matter what path you take to sell your home, we can help you navigate a successful path</p>
                        <button className="splash-nav-btn">See your options</button>
                    </div>
                    <div  onClick={this.navigateToRent} className="splash-nav">
                    <img src="https://lh3.googleusercontent.com/j93MTB6JlB33emFmEqUKmrvLwWJv_M_qpvrgvqvN0ziczKJbO2J_vfKAScVv4LO1EegKzqpuJXy-GWqBndNUKDf-9K_NapMfJhPTnmgu81N6YRMbrvG4Q2reqc_-KXbv3nSLdamibQ=w2400" alt="" />
                        <p className="upper-splash-nav-text">Rent a home</p>
                        <p className="lower-splash-nav-text">We're creating seamless online experiences from shopping on the largest rental network, to applying and paying rent</p>
                        <button className="splash-nav-btn">Find rentals</button>
                    </div>
                </div>
            </div>
        )
    }
}
