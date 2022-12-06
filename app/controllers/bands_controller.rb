class BandsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :not_found_response
    def create
        render json: Band.create(band_params), status: :ok
    end
    def show
        render json: Band.find(params[:id]), status: :ok
    end
    def update
        render json: Band.update(band_params), status: :ok
    end


    private
    def band_params
        params.permit(:name, :description, :image)
    end
    def not_found_response
        render json: {error: "Band not found"}, status: :not_found
    end
end
