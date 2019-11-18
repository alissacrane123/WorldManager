class CreateAddRoleToProjectMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :add_role_to_project_memberships do |t|
      add_column :project_memberships, :role, :string
      t.timestamps
    end
  end
end
