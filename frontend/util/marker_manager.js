
export default class MarkerManager {
    constructor(map){
        this.map = map; 
        //will be essential ok
        this.markers = {};  
    }

    updateMarkers(properties){
        
        //initialize property object 
        let propertyObj = {}; 

        //populate the propertyObj with the passed in properties arr
        properties.forEach(prop => propertyObj[prop.id] = prop);

        //remember that properties prop is an arr of property objects 
        properties
            .filter(property => !this.markers[property.id]) //give me a filtered arr where the properties are only those that dont have markers 
            .forEach(property => this.createMarkerFromProperty(property)) //make the marker for the filtered properties 

        //this.markers = { 1: marker, 2: marker }
        Object.keys(this.markers) //[1,2,3,...]
            .filter(propertyId => !propertyObj[propertyId])
            .forEach(propertyId => this.removeMarker(this.markers[propertyId])) //takes in the markers object as the argument need to make the helper method

    }

    //helper method:
    createMarkerFromProperty(property){
        const position = new google.maps.LatLng(property.lat, property.lng); //make a new instance of google maps longitude and latitude class
        const marker = new google.maps.Marker({
            position: position,
            map: this.map, //passed in as a argument within the constructor
            propertyId: property.id 

        })

        //adding it finally to the marker variable 
        this.markers[property.id] = marker; 
        //same as:
        // this.markers[marker.propertyId] = marker;
    }

    removeMarker(marker){
        //isolate the marker we want to remove 
        this.markers[marker.propertyId].setMap(null);
        //remove from the this.markers arr
        delete this.markers[marker.propertyId];  

    }

    //putting this shit on backburner...
}

