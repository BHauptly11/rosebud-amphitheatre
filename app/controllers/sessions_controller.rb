class SessionsController < ApplicationController

    def create
        params.permit(:email, :password, :session)
        user = User.find_by(email: params[:email])
        if user&.authenticate(params[:password])

            render json: user, status: :ok
        else
            render json: {error: "Login invalid"}, status: :not_found
        end
    end
    def destroy
        session.delete :user_id
        head :no_content
    end
end
