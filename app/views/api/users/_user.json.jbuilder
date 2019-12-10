
json.extract! user, :id, :email, :fname, :lname



if user.id == current_user.id 
  teammates = user.teammates
  json.teammates teammates.map { |mate| { id: mate.id, name: mate.fname + ' ' + mate.lname} }.uniq

  
end
