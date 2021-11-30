import React from 'react'
import PropertyIndexItem from './property_index_item';

class PropertyIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const { properties } = this.props;
        return (
            <div className='property-index-container'>
                {properties.map(
                    property => <PropertyIndexItem key={property.id} property={property} />
                )} 
            </div>
        )
    }
}

export default PropertyIndex; 

