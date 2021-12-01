import React from 'react'
import MarkerManager from '../../util/marker_manager';

class MiniMap extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const { property } = this.props;
        const { latitude, longitude } = property;
        const mapOptions = {
            center: { lat: latitude, lng: longitude },
            zoom: 15,
            disableDefaultUI: true
        }
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.updateMarkers([property]); 
    }

    render(){
        return (
            <div id='mini-map-container' ref={map => this.mapNode = map}>
                
            </div >
        )
    }
}

export default MiniMap; 