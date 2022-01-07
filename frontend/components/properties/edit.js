import React, { Component } from 'react'
import PropertyIndexItem from './property_index_item'

export default class Edit extends Component {
    constructor(props) {
        super(props)
    }

    //when the component mounts fetch all the properties that belong to this owner through owner id
    componentDidMount() {
        this.props.fetchProperties({ owner_id: this.props.currentUser.id, minPrice: '', maxPrice: '' })
    }

    render() {
        const { properties, currentUser, receiveEditFormProperty } = this.props;
        return (
            <div className="saved-index-container">
                <div className='saved-index-header'>Edit homes</div>
                <div className='saved-index'>    
                    {properties.map(
                        property => <PropertyIndexItem 
                                        saved={true}
                                        edit={true}
                                        key={property.id} 
                                        property={property} 
                                        currentUser={currentUser}
                                        receiveEditFormProperty={receiveEditFormProperty}
                                    />
                    ) }
                </div>
            </div>
        )
    }
}
