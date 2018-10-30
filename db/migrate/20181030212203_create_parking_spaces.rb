class CreateParkingSpaces < ActiveRecord::Migration[5.2]
  def change
    create_table :parking_spaces do |t|
      t.integer :parking_space_id
      t.integer :user_id
      t.integer :vehicle_id

      t.timestamps
    end
  end
end
