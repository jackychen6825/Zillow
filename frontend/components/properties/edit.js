import React, { Component } from 'react' //import React from react and object destructure component from react as well 
import PropertyIndexItem from './property_index_item'

export default class Edit extends Component {
    constructor(props) { //need to call constructor(props) and then call the super func on props 
        super(props)
    }

    //when the component mounts fetch all the properties that belong to this owner through owner id
    componentDidMount() { //when the component mounts do something 
        this.props.fetchProperties({ owner_id: this.props.currentUser.id, minPrice: '', maxPrice: '' })
    }

    render() {
        const { properties, currentUser, receiveEditFormProperty } = this.props; //access the props being passed down from the redux store and simply object destructure them into variables 
        //call the return function and for each item within the properties list simply map it out with a property index item component 
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
