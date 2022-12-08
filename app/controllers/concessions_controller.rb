class ConcessionsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found_response

    def create
        # if session[:user_id]
            render json: Concession.create(concession_params), status: :ok
        # else
        #     render json: {error: "Not authorized"}, status: :unauthorized
        # end
    end
    def index
        render json: Concession.all, status: :ok
    end
    def show
        render json: Concession.find(params[:id]), status: :ok
    end
    def update
        concession = Concession.find(params[:id])
        concession.update(concession_params)
        render json: concession, status: :ok
    end
    def destroy
        Concession.find(params[:id]).destroy
        render json: {}, status: :ok
    end

    private
    def concession_params
        params.permit(:name, :price, :image)
    end
    def not_found_response
        render json: {error: "Concession not found"}, status: :not_found
    end
end
