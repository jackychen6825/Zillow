class Api::UsersController < ApplicationController
  
  #signing up user 
  def create
    @user = User.new(user_params)
    
    if @user.save
      login(@user)
      render('/api/users/show') 
    else
      render json: ['Invalid email or password'], status: 422 
    end
  end 

  def show
    @user = User.find(params[:id])

    if @user 
      render :show
    else 
      render json: ['Could not find that user'], status: 422
    end 
  end 

  private 
  def user_params 
    params.require(:user).permit(:email, :password)
  end
end
