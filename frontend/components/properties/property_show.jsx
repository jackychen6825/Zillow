import React from "react";

class PropertyShow extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        const { property } = this.props;
        return (
            <div className='property-show-container'>
               <div className='show-images'></div>
               <div className='show-details-container'>
                    <div className='show-header'></div>
                    <div className='show-details'></div>
                    <div className='show-map'></div>
                    <div className='show-description'></div>
                    <p>{property.address}</p>
               </div> 
            </div>
        )
    }
}

export default PropertyShow;