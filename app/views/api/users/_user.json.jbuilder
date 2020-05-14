
json.extract! user, :id, :email, :fname, :lname



if user.id == current_user.id 
  teammates = user.teammates

  if user.teammates.length == 0
    teammates = [user]

  end


  projects = user.get_accepted_projects
  json.teammates teammates.map { |mate| { id: mate.id, name: mate.fname + ' ' + mate.lname} }.uniq
  json.projects projects.map { |p| { id: p.id, title: p.title } }.uniq

end
