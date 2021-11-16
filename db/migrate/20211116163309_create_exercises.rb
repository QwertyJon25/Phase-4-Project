class CreateExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :exercises do |t|
      t.string :name
      t.string :image
      t.text :description
      t.string :category
      t.integer :equipment_id

      t.timestamps
    end
  end
end
