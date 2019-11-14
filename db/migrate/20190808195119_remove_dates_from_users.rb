class RemoveDatesFromUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :b_month, :string
    remove_column :users, :b_day, :string
    remove_column :users, :b_year, :string
    remove_column :users, :gender, :string 
    add_column :users, :city, :string 
  end
end
