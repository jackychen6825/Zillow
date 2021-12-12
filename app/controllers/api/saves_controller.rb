class Api::SavesController < ApplicationController

    def create
        @save = Save.new(property_id: params[:property_id]) 
        @save.user_id = current_user.id

        if @save.save
            render :show 
        else 
            render json: @save.errors.full_messages 
        end 
    end 

    def destroy
        @save = Save.find_by(property_id: params[:id], user_id: current_user.id)
        if @save.destroy 
            render :show 
        else 
            render json: ['Could not delete save'], status: 422 
        end 
    end 

    private
    def save_params
        params.require(:save).permit(:user_id, :property_id)
    end 

end
