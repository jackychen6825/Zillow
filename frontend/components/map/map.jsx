import React from 'react';
import MarkerManager from '../../util/marker_manager';  

class Map extends React.Component {
    constructor(props){
        super(props)
    }

    componentDidMount() {
        // set the map to show SF
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, // this is SF
            zoom: 13
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        //making new instance of MarkerManager
        this.MarkerManager = new MarkerManager(this.map)
        //adding event listener to maps 
        this.registerListeners(); 
        //calling the instance method:
        this.MarkerManager.updateMarkers(this.props.properties)

    }

    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            this.props.updateBounds(bounds);
        });
    }

    componentDidUpdate(){
        this.MarkerManager.updateMarkers(this.props.properties)
    }

    render(){
        return(
            <div id='map-container' ref={map => this.mapNode = map}>
                
            </div>
        )
    } 
}

export default Map; 