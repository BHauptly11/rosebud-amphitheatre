class Band < ApplicationRecord
    has_many :concert_bands
    has_many :concerts, through: :concert_bands
    has_many :users, through: :concerts
end
