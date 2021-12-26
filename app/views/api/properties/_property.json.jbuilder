json.extract! property, :id, :address, :latitude, :longitude, :city, :state, :zipcode, :bedrooms, :bathrooms, :sqft, :price, :listing_type, :owner_id, :description
json.photoURLs property.photos.map { |photo| url_for(photo) }
