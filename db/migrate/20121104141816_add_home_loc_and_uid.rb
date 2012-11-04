class AddHomeLocAndUid < ActiveRecord::Migration
  def change
  	add_column :users, :homeAddress, :text 
  	add_column :users, :uid, :integer
  end
end
