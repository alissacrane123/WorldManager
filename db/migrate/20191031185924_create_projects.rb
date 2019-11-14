class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :title, null:false
      t.integer :owner_id, null:false

      t.timestamps
    end
    add_index :projects, [:owner_id, :title], unique: true 
    add_index :projects, :title
  end
end
