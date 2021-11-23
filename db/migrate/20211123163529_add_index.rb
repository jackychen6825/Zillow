class AddIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :properties, :longitude
  end
end
