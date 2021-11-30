import React from 'react';

const PropertyIndexItem = (props) => (
    <div className='property-item'>
        <img className='example-image' src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
        <div className='property-text-box'> 
            <p className='price'>{props.property.price}</p>
            <p className='details'> {props.property.bedrooms} bds {props.property.bathrooms} ba {props.property.sqft} sqft </p>
            {props.property.address}
        </div>
    </div>
)

export default PropertyIndexItem;