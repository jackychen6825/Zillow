class Api::PropertiesController < ApplicationController

    def index
        @properties = Property.in_bounds(params[:bounds]) #bounds will be avaulable in the params hash 
        render :index 
    end

    def create
        @property = Property.new(property_params)

        if @property.save
            render :show
        else 
            render json: @property.errors.full_messages, status: 422 
        end 
    end

    private

    def property_params
        params.require(:property).permit(
            :address, :latitude, :longitude, :city, :state, :zipcode, :bedrooms, :bathrooms, :sfqt, :price, :for_sale, :owner_id
        )
    end
end
