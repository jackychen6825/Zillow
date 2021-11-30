class Api::PropertiesController < ApplicationController

    def index
        properties = bounds ? Property.in_bounds(bounds) : Property.all

        if params[:minPrice] && params[:maxPrice]
            properties = properties.where(price: price_range)
        end 
        
        @properties = properties
        render :index 
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
            :for_sale
        )
    end

    def price_range
        (params[:minPrice]..params[:maxPrice])
    end 

    def bounds 
        params[:bounds]
    end 
end
