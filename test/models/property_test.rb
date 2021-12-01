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
require 'test_helper'

class PropertyTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
