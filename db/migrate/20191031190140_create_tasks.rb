class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :title, null:false
      t.text :description, null:false
      t.string :status, default: "Unstarted", null: false
      t.integer :project_id, null:false
      t.integer :user_id, null:false

      t.timestamps
    end
    add_index :tasks, :project_id
    add_index :tasks, :user_id 
    add_index :tasks, :title
  end
end
