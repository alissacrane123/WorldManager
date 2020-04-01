class DeleteProjectMembership < ActiveRecord::Migration[5.2]
  def change
    rename_table :notifications, :alerts
    remove_column :project_memberships, :request_status
    add_column :project_memberships, :accepted, :boolean, default:false
    remove_column :project_memberships, :role 
    add_column :project_memberships, :admin, :boolean, default:false 
  end
end
