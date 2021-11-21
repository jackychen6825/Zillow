class ApplicationController < ActionController::Base
    
    #CRLLL --> 
    def current_user 
        #find current user with the session token 
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def require_logged_in
        #redirect to login page if user is trying to access a feature available only to logged in users 
    end

    def login(user)
        @current_user = user 
        session[:session_token] = user.reset_session_token! #returns a session token 
    end

    def logout
        #disassociate user from session 
        session[:session_token] = nil
        current_user.reset_session_token!
    end

    def logged_in?
        !!current_user #!! -> truthy = true falsey = false (remember implicit returns in ruby!)
    end

end
