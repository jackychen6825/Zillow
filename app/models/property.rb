# == Schema Information
#
# Table name: properties
#
#  id          :bigint           not null, primary key
#  address     :string           not null
#  latitude    :float            not null
#  longitude   :float            not null
#  city        :string           not null
#  state       :string           not null
#  zipcode     :integer          not null
#  bedrooms    :integer          not null
#  bathrooms   :integer          not null
#  sqft        :integer          not null
#  price       :integer          not null
#  for_sale    :boolean          not null
#  owner_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text             not null
#
class Property < ApplicationRecord
    validates :address, :latitude, :longitude, :city, :state, :zipcode, :bedrooms, :bathrooms, :sqft, :price, :for_sale, :owner_id, :description, presence: true
    validates_inclusion_of :for_sale, in: [true, false]
    validates_uniqueness_of :latitude, scope: :longitude

    #validates that each posting has photo(s)
    validate :ensure_photos
    
    has_many_attached :photos

    def self.in_bounds(bounds) #params[:bounds] = bounds but params[:bounds] = nil 
        self.where("latitude < ?", bounds[:northEast][:lat])
        .where("latitude > ?", bounds[:southWest][:lat])
        .where("longitude > ?", bounds[:southWest][:lng])
        .where("longitude < ?", bounds[:northEast][:lng])
    end

    def ensure_photos
        unless self.photos.attached?
            errors[:photos] << "must be attached"
        end 
    end 
end
