class Api::SessionsController < ApplicationController

  def create
    #access email & pass with params --> find user 
    @user = User.find_by_credentials(
      params[:user][:email], 
      params[:user][:password]
    )

    if @user
      login(@user)
      render('api/users/show.json.jbuilder') 
    else
      render json: ['Invalid email or password'], status: 422 
    end

  end

  def destroy
    logout 
    render json: {}
  end

  private 

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
