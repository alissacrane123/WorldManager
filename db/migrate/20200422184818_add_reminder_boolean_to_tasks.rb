class AddReminderBooleanToTasks < ActiveRecord::Migration[5.2]
  def change
    add_column :tasks, :reminder, :boolean, default: false 
    add_index :tasks, :reminder
  end
end
