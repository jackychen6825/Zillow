import React from 'react'
import PropertyIndexItem from './property_index_item';

class PropertyIndex extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        //passed down from map dispatch to props 
        this.props.fetchProperties();
    }

    render(){
        const { properties } = this.props;
        return (
            <ul>
                {properties.map(
                    property => <PropertyIndexItem key={property.id} property={property} />
                )}
            </ul>
        )
    }
}

export default PropertyIndex; 

