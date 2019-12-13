
json.extract! user, :id, :email, :fname, :lname



if user.id == current_user.id 
  teammates = user.teammates
  projects = user.projects
  json.teammates teammates.map { |mate| { id: mate.id, name: mate.fname + ' ' + mate.lname} }.uniq
  json.projects projects.map { |p| { id: p.id, title: p.title } }.uniq

  
end
