class ConcertsController < ApplicationController

    def create
        render json: Concert.create(concert_params), status: :ok
    end
    def index
        render json: Concert.all, status: :ok
    end
    def show
        concert = Concert.find(params[:id])
        render json: concert.to_json(include: [:bands]), status: :ok
    end
    def update
        concert = Concert.find(params[:id])
        concert.update(concert_params)
        render json: concert, status: :ok
    end

    private
    def concert_params
        params.permit(:headline, :subtitle, :image, :date, :doors, :start_time, :ticket_price)
    end
end
