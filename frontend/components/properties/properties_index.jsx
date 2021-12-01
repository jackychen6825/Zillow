import React from 'react'
import PropertyIndexItem from './property_index_item';

class PropertyIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const { properties, openModal } = this.props
        return (
            <div className='property-index-container'>
                {
                    properties.map(property => (
                        <PropertyIndexItem 
                            key={property.id} 
                            property={property} 
                            openModal={openModal}
                        />
                    ))
                } 
            </div>
        )
    }
}

export default PropertyIndex; 

