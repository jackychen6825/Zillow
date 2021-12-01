import React from "react";
import MiniMap from "../map/mini_map";

class PropertyShow extends React.Component {
    constructor(props){
        super(props)
    }
    
    render(){
        const { property } = this.props;

        return (
            <div className='property-show-container'>
               <div className='show-images'>
                    
               </div>
               <div className='show-details-container'>
                    <div className='show-header'>
                        <img src="https://lh3.googleusercontent.com/Xo7bzpMz7a_CcTXol6Aw8Vx7C0inIf4nz54w0Ds4Hgo4gAlgF8nBrYrjerVjif00S2YpmTGvsKgKKeIqFaMuxh_9enSyyQw6xQwrBq7a4w1MFymcClsmWbd6yHaR7ZKaiK9eq8hLSQ=w2400" className="show-logo" />
                    </div>
                    <div className='show-details'>
                        <div className='show-price'>$3,000,000</div>
                        <div className='show-layout'>2bds | 2ba | 1,195 sqft</div>
                        <span className='show-address'>{property.address}</span>
                        <div className='buttons-container'>
                        <button className='agent'>Contact an Agent</button>
                        <button className='tour'>Take a Tour</button>
                        </div>
                    </div>
                    <div className='show-map'>
                        <MiniMap property={property} />
                    </div>
                    <div className='show-description'></div>
               </div> 
            </div>
        )
    }
}

export default PropertyShow;