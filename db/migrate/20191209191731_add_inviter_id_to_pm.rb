class AddInviterIdToPm < ActiveRecord::Migration[5.2]
  def change
    add_column :project_memberships, :inviter_id, :integer
  end
end
