import React, { Component } from 'react'
import { connect } from 'react-redux';
import { receiveLatLng } from '../../actions/property_form_actions';
import MarkerManager from '../../util/marker_manager';

const mdtp = dispatch => ({
    receiveLatLng: latLngObj => dispatch(receiveLatLng(latLngObj))
});

class FormMiniMap extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { receiveLatLng } = this.props;

        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435 }, 
            zoom: 11,
            disableDefaultUI: true
        }
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map)
        this.map.addListener("click", (mapsMouseEvent) => {
            receiveLatLng(mapsMouseEvent.latLng.toJSON()) //put it on the state for the property form
            
            //delete the previous marker
            this.MarkerManager.removeFormMarker();
            //create new marker based on where the user clicked
            this.MarkerManager.createMarkerFromLatLngObj(mapsMouseEvent.latLng.toJSON())
        })
    }
    
    render() {
        return (
            <div id='form-mini-map-container' ref={map => this.mapNode = map}>
                
            </div >
        )
    }
}

export default connect(null, mdtp)(FormMiniMap);