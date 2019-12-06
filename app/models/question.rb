class Question < ApplicationRecord
  belongs_to :category
  belongs_to :difficulty
  
  def answers
    [self.correct_answer,self.incorrect_answer_1, self.incorrect_answer_2, self.incorrect_answer_3].shuffle
  end

end
