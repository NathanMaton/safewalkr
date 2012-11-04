class AddfromLoctoLoc < ActiveRecord::Migration
  def change
  	add_column :requests, :fromLoc, :string 
  	add_column :requests, :toLoc, :string
  	add_column :requests, :meetingTime, :datetime

  end
end
