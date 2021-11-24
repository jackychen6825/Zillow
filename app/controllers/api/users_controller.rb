class Api::UsersController < ApplicationController
  
  #signing up user 
  def create
    @user = User.new(user_params)
    
    if @user.save!
      login(@user)
      render('/api/users/show') #render jbuilder object  
    else
      render json: ['Invalid email or password'], status: 422 
    end
  end 

  private 
  #implementing safe params to white-list properties 
  def user_params 
    params.require(:user).permit(:email, :password)
  end
end
