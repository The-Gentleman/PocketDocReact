class CreatePatients < ActiveRecord::Migration[6.0]
  def change
    create_table :patients do |t|
      t.string :name
      t.string :symptoms
      t.string :diagnosis
      t.description :home_exercise_plan
      t.integer :user_id

      t.timestamps
    end
  end
end
