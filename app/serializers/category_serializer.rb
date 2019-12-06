class CategorySerializer < ActiveModel::Serializer
  attributes :id, :subject
  
  has_many :questions
end
