class AddRequestStatusToPm < ActiveRecord::Migration[5.2]
  def change
    add_column :project_memberships, :request_status, :boolean, default: false 
    remove_index :project_memberships, :project_id
    add_index :project_memberships, [:project_id, :user_id], unique: true
  end
end
