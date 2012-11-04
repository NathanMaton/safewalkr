class Responseid < ActiveRecord::Migration
  def change
  	add_column :requests, :responseIds, :text 
  end

end
