# == Schema Information
#
# Table name: properties
#
#  id         :bigint           not null, primary key
#  address    :string           not null
#  latitude   :float            not null
#  longitude  :float            not null
#  city       :string           not null
#  state      :string           not null
#  zipcode    :integer          not null
#  bedrooms   :integer          not null
#  bathrooms  :integer          not null
#  sfqt       :integer          not null
#  price      :integer          not null
#  for_sale   :boolean          not null
#  owner_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Property < ApplicationRecord
    validates :address, :latitude, :longitude, :city, :state, :zipcode, :bedrooms, :bathrooms, :sfqt, :price, :for_sale, :owner_id, presence: true
    validates_inclusion_of :for_sale, in: [true, false]
    
    #validate uniqueness of latitude / longitude combination 
    validates_uniqueness_of :latitude, scope: :longitude

end