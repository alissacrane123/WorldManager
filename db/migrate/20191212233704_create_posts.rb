class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :user_id, null:false
      t.text :body, null: false
      t.integer :project_id
      t.integer :task_id

      t.timestamps
    end
    add_index :posts, :project_id
    add_index :posts, :task_id
    add_index :posts, :user_id
  end
end
