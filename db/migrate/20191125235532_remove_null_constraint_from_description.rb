class RemoveNullConstraintFromDescription < ActiveRecord::Migration[5.2]
  def change
    remove_column :tasks, :description 
    add_column :tasks, :description, :text
  end
end
