class ConcertSerializer < ActiveModel::Serializer
  attributes :id, :headline, :subtitle, :image, :date, :doors, :start_time, :ticket_price
end
