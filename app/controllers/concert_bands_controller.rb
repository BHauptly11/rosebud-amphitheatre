class ConcertBandsController < ApplicationController

    def create
        # render json: ConcertBand.create!(concert_band_params), status: :ok
        # byebug
        #Black voodoo magic 
        params[:band_id].each{ |band| ConcertBand.create!(concert_id: params[:concert_id], band_id: band.to_i)}
    end
    def destroy
        concert_band = ConcertBand.find(params[:id]).destroy
        render json: {}, status: :ok
    end

    private

    def concert_band_params
        params.permit(:concert_id, :band_id)
    end
end
