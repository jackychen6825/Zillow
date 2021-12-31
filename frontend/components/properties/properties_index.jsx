import React from 'react'
import PropertyIndexItem from './property_index_item';

class PropertyIndex extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        const { properties, openModal, currentUser, makeSave, removeSave, receiveCurrentProperty } = this.props
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
                        />
                    ))
                } 
            </div>
        )
    }
}

export default PropertyIndex; 

