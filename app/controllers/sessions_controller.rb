class SessionsController < ApplicationController

    def create
        
        params.permit[:email, :password]
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])
            # session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: {error: "Login invalid"}, status: :not_found
        end
    end
    def destroy
    end
end
