# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Property.create(
    address: "1256 72nd Street, Brooklyn, NY 11228",
    latitude: 1235.234,
    longitude: 9812.123,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: 11228, 
    bedrooms: 4,
    bathrooms: 2, 
    sfqt: 1200,
    price: 1600000,
    for_sale: true, 
    owner_id: 1
    
)