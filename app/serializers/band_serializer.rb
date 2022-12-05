class BandSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image
end
