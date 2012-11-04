class CreateRequests < ActiveRecord::Migration
  def change
    create_table :requests do |t|
      t.integer :uid
      t.boolean :open

      t.timestamps
    end
  end
end
