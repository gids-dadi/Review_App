class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :slug, :avg_score

  has_many :reviews
end
