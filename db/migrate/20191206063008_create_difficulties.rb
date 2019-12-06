class CreateDifficulties < ActiveRecord::Migration[6.0]
  def change
    create_table :difficulties do |t|
      t.string :difficulty

      t.timestamps
    end
  end
end
