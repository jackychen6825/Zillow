import React from 'react'
import PropertyIndexItem from './property_index_item';

class PropertyIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const { properties, openModal, currentUser, makeSave, removeSave, receiveCurrentProperty, resetCurrentProperty } = this.props
        return (
            <div className='property-index-container'>
                {
                    properties.map(property => (
                        <PropertyIndexItem 
                            saved={false}
                            key={property.id} 
                            property={property} 
                            currentUser={currentUser}
                            makeSave={makeSave}
                            removeSave={removeSave}
                            openModal={openModal}
                            receiveCurrentProperty={receiveCurrentProperty}
                            resetCurrentProperty={resetCurrentProperty}
                        />
                    ))
                } 
            </div>
        )
    }
}

export default PropertyIndex; 

