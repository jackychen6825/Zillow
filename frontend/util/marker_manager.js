export default class MarkerManager {
    constructor(map, handleClick){
        this.map = map; 
        this.markers = {}; 
        this.handleClick = handleClick; 
    }

    updateMarkers(properties) {
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
        
        const contentString = 
        `<div className="info-window-container" style="display: flex; width: 170px; height: 60px;">
            <div className="info-window-photo-container" style="width: 60%; height: 100%; margin-right: 8px">
                <img src="${property.photoURLs[0]}" className='info-window-photo' style="height: 100%; width: 100%;" />
            </div>
            <div className="property-info-container" style="display: flex; flex-wrap: wrap; width: 40%; height: 100%;">
                <div className="price-info-window" style="font-weight: 500; width: 100%; height: 33%;"> $${property.price.toLocaleString('en')} </div>
                <div className="gen-info-window" style="width: 100%; height: 33%;"> ${property.bedrooms} bd ${property.bathrooms} ba </div>
                <div className="gen-info-window" style="width: 100%; height: 33%;"> ${property.sqft} sqft</div>
            </div>
        </div>`

        const infoWindow = new google.maps.InfoWindow({
            content: contentString
        })

        const marker = new google.maps.Marker({
            position: position,
            map: this.map, 
            propertyId: property.id,
            infoWindow,
            animation: google.maps.Animation.DROP, //makes the markers drop on the map
            icon: 'http://maps.google.com/mapfiles/kml/pal2/icon10.png', //changing the icon of marker 
        });

        marker.addListener('click', () => this.handleClick(property)); //open modal when user clicks on marker 
        marker.addListener('mouseover', () => {
            infoWindow.open({
                anchor: marker,
                map: this.map,
                shouldFocus: false
            })
        })
        marker.addListener('mouseout', () => {
            infoWindow.close()
        })

        this.markers[marker.propertyId] = marker;

    }

    removeMarker(marker){
        //isolate the marker we want to remove 
        this.markers[marker.propertyId].setMap(null);
        //remove from the this.markers arr
        delete this.markers[marker.propertyId];  

    }
}

