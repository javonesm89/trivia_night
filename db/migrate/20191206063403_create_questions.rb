class CreateQuestions < ActiveRecord::Migration[6.0]
  def change
    create_table :questions do |t|
      t.string :question
      t.string :correct_answer
      t.string :incorrect_answer_1
      t.string :incorrect_answer_2
      t.string :incorrect_answer_3
      t.references :category, null: false, foreign_key: true
      t.references :difficulty, null: false, foreign_key: true

      t.timestamps
    end
  end
end
