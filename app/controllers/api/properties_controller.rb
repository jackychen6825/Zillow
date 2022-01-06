class Api::PropertiesController < ApplicationController

    def index
        properties = bounds ? Property.in_bounds(bounds) : Property.all

        if params[:minPrice] != "" && params[:maxPrice] != ""
            properties = properties.where(price: price_range)
        end  

        if params[:minPrice] == "" && params[:maxPrice] != ""
            properties = properties.where("price < ?", params[:maxPrice])
        end 

        if params[:minPrice] != "" && params[:maxPrice] == ""
            properties = properties.where("price > ?", params[:minPrice])
        end 

        if params[:minBeds] #if there is a minBeds key in our params apply the filters 
            properties = properties.where("bedrooms > ?", Integer(params[:minBeds]) - 1)
        end 

        if params[:minBaths] #if there is a minBeds key in our params apply the filters 
            properties = properties.where("bathrooms > ?", Integer(params[:minBaths]) - 1)
        end 
        
        if params[:saved_ids]  
            properties = properties.where(id: params[:saved_ids]) 
        end 

        if params[:searchType] === 'buy'
            properties = properties.where(listing_type: "sale")
        end 

        if params[:searchType] === 'rental'
            properties = properties.where(listing_type: "rental")
        end 

        @properties = properties
        render :index 
    end

    def show 
        @property = Property.with_attached_photos.find(params[:id])
        render :show 
    end 

    def create
        @property = Property.new(property_params)
        @property.owner_id = current_user.id 
        
        if @property.save
            render :show
        else 
            render json: @property.errors.full_messages, status: 422 
        end 
    end

    private

    def property_params
        params.require(:property).permit(
            :address, 
            :latitude, 
            :longitude, 
            :city, 
            :state, 
            :zipcode, 
            :bedrooms, 
            :bathrooms, 
            :sqft, 
            :price, 
            :listing_type,
            :description,
            photos: []
        )
    end

    def price_range
        (params[:minPrice]..params[:maxPrice])
    end 

    def bounds 
        params[:bounds]
    end 
end
