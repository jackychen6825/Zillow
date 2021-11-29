import React from 'react';
import MarkerManager from '../../util/marker_manager'; 

const mapOptions = {
    center: { lat: 37.7758, lng: -122.435 }, 
    zoom: 13
};

class Map extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map)

        //when the component mounts set the bounds 
        this.registerListeners(); 
        this.MarkerManager.updateMarkers(this.props.properties)
    }

    //dispatch updateBounds when map moves
    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            this.props.updateFilter('bounds', bounds); //filter, value 
        });

        //additional event listener 
        
    }

    componentDidUpdate(){
        this.MarkerManager.updateMarkers(this.props.properties)
    }

    render(){
        return(
            <div id='map-container' ref={map => this.mapNode = map}></div>
        )
    } 
}

export default Map; 