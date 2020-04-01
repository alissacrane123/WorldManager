class AddColumnToNotifications < ActiveRecord::Migration[5.2]
  def change
    add_column :notifications, :user_id, :integer, null: false 
    remove_column :notifications, :user_checked
    add_column :notifications, :checked, :boolean, default: false
    drop_table :add_role_to_project_memberships
  end
end
