
export default class MarkerManager {
    constructor(map, handleClick){
        this.map = map; 
        this.markers = {}; 
        this.handleClick = handleClick; 
    }

    updateMarkers(properties){
        //converting properties arr into property object for constant look up time: 
        let propertyObj = {}; 
        properties.forEach(property => propertyObj[property.id] = property);

        //for each property, if the property id isnt in this.markers make a new marker for it 
        properties
            .filter(property => !this.markers[property.id]) 
            .forEach(property => this.createMarkerFromProperty(property))  

        //removing markers for properties not in our property obj
        Object.keys(this.markers) //[1,2,3,...]
            .filter(propertyId => !propertyObj[propertyId])
            .forEach(propertyId => this.removeMarker(this.markers[propertyId])) //takes in the markers object as the argument need to make the helper method

    }

    createMarkerFromProperty(property){
        const position = new google.maps.LatLng(property.latitude, property.longitude); //make a new instance of google maps longitude and latitude class
        
        const marker = new google.maps.Marker({
            position: position,
            map: this.map, 
            propertyId: property.id 
        });

        marker.addListener('click', () => this.handleClick(property)); //open modal when user clicks on marker 
        this.markers[marker.propertyId] = marker;

    }

    removeMarker(marker){
        //isolate the marker we want to remove 
        this.markers[marker.propertyId].setMap(null);
        //remove from the this.markers arr
        delete this.markers[marker.propertyId];  

    }
}

