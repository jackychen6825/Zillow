import React from 'react';
import MarkerManager from '../../util/marker_manager'; 

let mapOptions = {
    center: { lat: 37.7758, lng: -122.435 }, 
    zoom: 13
};

class Map extends React.Component {
    constructor(props){
        super(props)

        this.createMap = this.createMap.bind(this)
        this.getLatLng = this.getLatLng.bind(this)
    }

    getLatLng(address) {
        const geocoder = new google.maps.Geocoder(); //creating new geocoder instance
        geocoder.geocode({ address: address }, function(results, status) {
            if (status === 'OK')
            {
                //changing the center of google maps 
                mapOptions.center.lat = results[0].geometry.location.lat();
                mapOptions.center.lng = results[0].geometry.location.lng();

                this.createMap();
            } else {
                
            }
            }.bind(this))
    }

    createMap() {
        this.map = new google.maps.Map(this.mapNode, mapOptions); //making new map instance
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        this.registerListeners(); 
        this.MarkerManager.updateMarkers(this.props.properties)
    }

    componentDidMount() { 
        const { address } = this.props;
        if (address !== '') {
            this.getLatLng(address)
        } else {
            this.createMap()
        }
    }

    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            this.props.updateFilter('bounds', bounds); 
        });
    }
    
    componentDidUpdate(prevProps){
        if (prevProps.address !== this.props.address) {
            this.getLatLng(this.props.address)
        }

        if (this.MarkerManager) {
            this.MarkerManager.updateMarkers(this.props.properties)
        }

        //if there is a marker manager and the current property has changed and the current property isnt empty change the associated marker
        if (this.MarkerManager && prevProps.currentProperty !== this.props.currentProperty && this.props.currentProperty !== "") {
            this.MarkerManager.changeMarkerColorFromPropertyId(this.props.currentProperty)
        }

        //if there is a marker manager and the current property has changed and the current property is empty (something to nothing)
        if (this.MarkerManager && prevProps.currentProperty !== this.props.currentProperty && this.props.currentProperty === "") {
            this.MarkerManager.changeMarkersBack()
        }
    }

    handleMarkerClick(property){
        this.props.openModal('show', property)
    }

    render(){
        return (
            <div id='map-container' ref={map => this.mapNode = map}></div>
        )
    } 
}

export default Map; 