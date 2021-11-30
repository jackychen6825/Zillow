class RenamePropertyCol < ActiveRecord::Migration[5.2]
  def change
    rename_column :properties, :sfqt, :sqft
  end
end
