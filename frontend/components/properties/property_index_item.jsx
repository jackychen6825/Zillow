import React from 'react';
import { withRouter } from 'react-router'

class PropertyIndexItem extends React.Component {
    constructor(props){
        super(props)
        this.handleSave = this.handleSave.bind(this)
        this.handleRemoveSave = this.handleRemoveSave.bind(this)
        this.renderSaves = this.renderSaves.bind(this)
        this.redirectToEdit = this.redirectToEdit.bind(this)
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

    redirectToEdit() {
        const { receiveEditFormProperty, property } = this.props;
        receiveEditFormProperty(property)
        this.props.history.push("/properties/new")
    }

    render(){
        const { property, openModal, saved, edit, receiveCurrentProperty, resetCurrentProperty, receiveEditFormProperty } = this.props;
        
        return (
            <div className={saved ? 'property-item-saved' : 'property-item'}>
                <img onMouseEnter={saved ? () => console.log('') : () => receiveCurrentProperty(property)} onMouseLeave={saved ? () => console.log('') : resetCurrentProperty} onClick={edit ? this.redirectToEdit : () => openModal('show', property)} className='example-image' src={property.photoURLs[0]} alt="" />
                <div className='property-text-box'> 
                    <p className='price'>${property.price.toLocaleString('en')}</p>
                    <p className='details'>{property.bedrooms} bds {property.bathrooms} ba {property.sqft} sqft</p>
                    <p className='address'>{property.address}</p>
                    {edit ? "" : this.renderSaves()}
                </div>
            </div>
        )
    }
} 

export default withRouter(PropertyIndexItem);