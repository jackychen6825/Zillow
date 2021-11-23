class CreateProperties < ActiveRecord::Migration[5.2]

  def change
    create_table :properties do |t|
      t.string :address, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.integer :zipcode, null: false
      t.integer :bedrooms, null: false
      t.integer :bathrooms, null: false
      t.integer :sfqt, null: false
      t.integer :price, null: false
      t.boolean :for_sale, null: false
      t.integer :owner_id, null: false

      t.timestamps
    end
 
    add_index :properties, :owner_id 
    add_index :properties, [:latitude, :longitude], unique: true 
    add_index :properties, :city
    add_index :properties, :zipcode
    add_index :properties, :bedrooms
    add_index :properties, :bathrooms
    add_index :properties, :price
  end
end
