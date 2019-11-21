class AddDueDateToTasks < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :due_date, :string
    add_index :tasks, :due_date
  end
end
