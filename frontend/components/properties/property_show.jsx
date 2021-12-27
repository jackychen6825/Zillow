import React from "react";
import MiniMap from "../map/mini_map";

class PropertyShow extends React.Component {
    constructor(props){
        super(props)
        this.handleRemoveSave = this.handleRemoveSave.bind(this),
        this.handleSave = this.handleSave.bind(this)
        this.renderSaves = this.renderSaves.bind(this)
    }

    handleSave() {
        if (this.props.currentUser) {
            this.props.makeSave(this.props.property.id)
        } else {
            this.props.openModal('login')
        }
    }

    handleRemoveSave() {
        this.props.removeSave(this.props.property.id)
    }

    renderSaves() {
        if (this.props.currentUser) {
            return this.props.currentUser.saves.includes(this.props.property.id) ? <div className='save-container-show' onClick={this.handleRemoveSave}><i className="fas fa-heart fa-2x show"></i></div> : <div className='save-container-show' onClick={this.handleSave}><i className="far fa-heart fa-2x show"></i></div>
        } else {
            return <div className='save-container-show' onClick={this.handleSave}><i className="far fa-heart fa-2x show"></i></div>
        }
    }
    
    render(){
        const { property } = this.props;

        return (
            <div className='property-show-container'>
                {this.renderSaves()}
               <div className='show-images'>
                    {property.photoURLs.map(
                        (photo, idx) => <div key={idx} className='single-photo'><img key={idx} className='show-photo' src={photo} alt="" /></div>
                    )}  
               </div>
               <div className='show-details-container'>
                    <div className='show-header'>
                        <img src="https://lh3.googleusercontent.com/Xo7bzpMz7a_CcTXol6Aw8Vx7C0inIf4nz54w0Ds4Hgo4gAlgF8nBrYrjerVjif00S2YpmTGvsKgKKeIqFaMuxh_9enSyyQw6xQwrBq7a4w1MFymcClsmWbd6yHaR7ZKaiK9eq8hLSQ=w2400" className="show-logo" />
                    </div>
                    <div className='show-details'>
                        <div className='show-price'>${property.price.toLocaleString('en')}</div>
                        <div className='show-layout'>{property.bedrooms}bds | {property.bathrooms}ba | {property.sqft}sqft</div>
                        <span className='show-address'>{property.address}</span>
                        <div className='buttons-container'>
                        <button className='agent'>Contact an Agent</button>
                        <button className='tour'>Take a Tour</button>
                        </div>
                    </div>
                    <div className='show-map'>
                        <MiniMap property={property} />
                    </div>
                    <div className='description-container'>
                        <p className='overview'>Overview</p>
                        <p className='description'>
                            {property.description}
                        </p>
                    </div>
               </div> 
            </div>
        )
    }
}

export default PropertyShow;