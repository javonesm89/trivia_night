class DifficultySerializer < ActiveModel::Serializer
  attributes :id, :difficulty
  has_many :questions
end
