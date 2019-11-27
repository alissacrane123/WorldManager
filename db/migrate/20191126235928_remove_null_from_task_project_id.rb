class RemoveNullFromTaskProjectId < ActiveRecord::Migration[5.2]
  def change
    remove_column :tasks, :status
    add_column :tasks, :status, :string, default: "Not Started", null:false

    remove_index :tasks, :project_id
    remove_column :tasks, :project_id
    add_column :tasks, :project_id, :integer
    add_index :tasks, :project_id

    remove_column :tasks, :priority
    add_column :tasks, :priority, :string, default: 'low'


  end
end
