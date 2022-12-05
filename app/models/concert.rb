class Concert < ApplicationRecord
    has_many :tickets
    has_many :users, through: :tickets
    has_many :concert_bands
    has_many :bands, through: :concert_bands
end
