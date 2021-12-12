import React, { Component } from 'react'
import PropertyIndexItem from './property_index_item'

export default class Saved extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchProperties({ saved_ids: this.props.saves })
    }

    render() {
        const { properties, currentUser, openModal, makeSave, removeSave } = this.props;
        return (
            <div className="saved-index-container">
                {properties.map(
                    property => <PropertyIndexItem 
                                    key={property.id} 
                                    property={property} 
                                    currentUser={currentUser}
                                    makeSave={makeSave}
                                    removeSave={removeSave}
                                    openModal={openModal}
                                />
                ) }
            </div>
        )
    }
}
