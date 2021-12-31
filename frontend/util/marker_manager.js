export default class MarkerManager {
    constructor(map, handleClick){
        this.map = map; 
        this.markers = {}; 
        this.handleClick = handleClick; 
        this.changeMarkerColorFromPropertyId = this.changeMarkerColorFromPropertyId.bind(this);
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
            animation: google.maps.Animation.DROP, 
            icon: 'https://lh3.googleusercontent.com/2Z8Z3x__hX_9f66a5gHwRatdC9LsPsdRLVqW4nm9BgDtWQOrc-B4TpNL82XBtxOCvg_nfq3sEUBZmoU3DZXoi-q6R79a3WqEN4CV7jHDir1gojXouAze0axsuQhzdt6a62tpTTJnIA=s48-p-k'
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

    //change the color of all the marekrs to red - reset to default 
    changeMarkersBack() {
        for (const markerId in this.markers) { //iterating through an object
            this.markers[markerId].setIcon('https://lh3.googleusercontent.com/2Z8Z3x__hX_9f66a5gHwRatdC9LsPsdRLVqW4nm9BgDtWQOrc-B4TpNL82XBtxOCvg_nfq3sEUBZmoU3DZXoi-q6R79a3WqEN4CV7jHDir1gojXouAze0axsuQhzdt6a62tpTTJnIA=s48-p-k')
            this.markers[markerId].setAnimation(null)
        }

    }

    
    //update specific marker 
    changeMarkerColorFromPropertyId(propertyId) {
        //access the right marker
        const associatedMarker = this.markers[propertyId];
        //change the icon associated with the marker that is currently being hovered over
        associatedMarker.setIcon('https://lh3.googleusercontent.com/iGy8H-cxKfcjLu-mSvsBL81MSA3xsJXypekjzuIcyMoSa_gsLt8VlCzhHX4GO244ffjW6qlzKx4v8JTwfDKpQTgwjTT_rgynkZe_lPe0JwL9n8fBwaotq6gv6F0kUuLkAJxgsmhBRw=s48-p-k') //want to set it to a purple marker icon 
        //make the marker bounce 
        associatedMarker.setAnimation(google.maps.Animation.BOUNCE)
    }

    removeMarker(marker){
        //isolate the marker we want to remove 
        this.markers[marker.propertyId].setMap(null);
        //remove from the this.markers arr
        delete this.markers[marker.propertyId];  

    }
}

