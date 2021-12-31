import React from 'react';

class PropertyIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.handleSave = this.handleSave.bind(this),
        this.handleRemoveSave = this.handleRemoveSave.bind(this)
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
            return this.props.currentUser.saves.includes(this.props.property.id) ? <div className='save-container' onClick={this.handleRemoveSave}><i className="fas fa-heart fa-2x"></i></div> : <div className='save-container' onClick={this.handleSave}><i className="far fa-heart fa-2x"></i></div>
        } else {
            return <div className='save-container' onClick={this.handleSave}><i className="far fa-heart fa-2x"></i></div>
        }
    }

    render(){
        const { property, openModal, saved, receiveCurrentProperty } = this.props;
        
        return (
            <div onMouseEnter={() => receiveCurrentProperty(property)} className={saved ? 'property-item-saved' : 'property-item'}>
                <img onClick={() => openModal('show', property)} className='example-image' src={property.photoURLs[0]} alt="" />
                <div className='property-text-box'> 
                    <p className='price'>${property.price.toLocaleString('en')}</p>
                    <p className='details'>{property.bedrooms} bds {property.bathrooms} ba {property.sqft} sqft</p>
                    <p className='address'>{property.address}</p>
                    {this.renderSaves()}
                </div>
            </div>
        )
    }
} 

export default PropertyIndexItem;