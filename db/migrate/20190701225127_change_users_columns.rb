class ChangeUsersColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :city, :string
    remove_column :users, :state, :string

    add_column :users, :b_month, :string 
    add_column :users, :b_day, :string
    add_column :users, :b_year, :string 
    add_column :users, :gender, :string 
  end
end
