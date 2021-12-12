json.extract! user, :id, :email
json.saves user.saves.map { |save| save.property_id }
