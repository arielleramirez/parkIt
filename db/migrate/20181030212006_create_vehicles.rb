class CreateVehicles < ActiveRecord::Migration[5.2]
  def change
    create_table :vehicles do |t|
      t.integer :vehicle_id
      t.integer :user_id
      t.string :liscense_num

      t.timestamps
    end
  end
end
