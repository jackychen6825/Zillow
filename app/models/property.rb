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


    #need to limit the map to showing markers within the boundaries of the map
    #btw map is a square oki which happens to be a rectangle but a rectangle isnt a square 
    #remember 5th grade material, it is important for life in general ok ok ok 

    def self.in_bounds(bounds)
        self.where("lat < ?", bounds[:northEast][:lat])
        .where("lat > ?", bounds[:southWest][:lat])
        .where("lng > ?", bounds[:southWest][:lng])
        .where("lng < ?", bounds[:northEast][:lng])
    end



end
