import React, { Component } from 'react'
import { connect } from 'react-redux';
import { receiveLatLng } from '../../actions/property_form_actions';

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
        this.map.addListener("click", (mapsMouseEvent) => {
            
            receiveLatLng(mapsMouseEvent.latLng.toJSON()) //put it on the state for the property form
            // console.log(mapsMouseEvent.latLng.toJSON()) //console log it for me real quick
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