import React from 'react';

class PropertyIndexItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const { property, openModal } = this.props;
    
        return (
            <div className='property-item' onClick={() => openModal('show', property)}>
                <img  className='example-image' src={property.photoURLs[0]} alt="" />
                <div className='property-text-box'> 
                    <p className='price'>${property.price}</p>
                    <p className='details'>{property.bedrooms} bds {property.bathrooms} ba {property.sqft} sqft</p>
                    <p className='address'>{property.address}</p>
                </div>
            </div>
        )
    }
} 

export default PropertyIndexItem;