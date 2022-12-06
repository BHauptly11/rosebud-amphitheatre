class TicketsController < ApplicationController

    def create
        render json: Ticket.create(ticket_params)
    end

    private
    def ticket_params
        params.permit(:user_id, :concert_id)
    end
end
