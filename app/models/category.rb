class Category < ApplicationRecord
    has_many :scores
    has_many :questions
end
