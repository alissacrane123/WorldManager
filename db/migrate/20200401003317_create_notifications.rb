class CreateNotifications < ActiveRecord::Migration[5.2]
  def change
    create_table :notifications do |t|
      t.boolean :user_checked, default: false 
      t.bigint :notifiable_id, null: false
      t.string :notifiable_type, null: false 
      t.timestamps
    end
    add_index :notifications, :notifiable_id
    add_index :notifications, :notifiable_type
  end
end
