class ChangeCol < ActiveRecord::Migration[5.2]
  def change
    remove_column :properties, :for_sale
    add_column :properties, :listing_type, :string, null:false
  end
end
