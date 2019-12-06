class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :user, :points, :category
  belongs_to :category
end
