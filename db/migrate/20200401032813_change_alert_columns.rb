class ChangeAlertColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :alerts, :notifiable_id
    add_column :alerts, :alertable_id, :bigint, null:false
    remove_column :alerts, :notifiable_type
    add_column :alerts, :alertable_type, :string, null:false 
  end
end
