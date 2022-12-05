class TicketSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :concert_id
end
