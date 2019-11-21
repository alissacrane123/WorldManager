class ChangeDateColumn < ActiveRecord::Migration[5.2]
  def change
    remove_index :tasks, :due_date
    remove_column :tasks, :due_date

    add_column :tasks, :due_date, :datetime
    add_index :tasks, :due_date
  end
end
