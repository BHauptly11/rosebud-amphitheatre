class ConcertBandsController < ApplicationController

    def create
        render json: ConcertBand.create(concert_band_params), status: :ok
    end
    def destroy
        concert_band = ConcertBand.find(params[:id]).destroy
        render json: {}, status: :ok
    end
end
