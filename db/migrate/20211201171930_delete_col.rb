class DeleteCol < ActiveRecord::Migration[5.2]
  def change
    remove_column :properties, :description
    add_column :properties, :description, :text, null: false
  end
end
