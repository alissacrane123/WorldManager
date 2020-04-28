
json.set! "projects" do
  @projects.each do |project|
    json.partial! "api/projects/project", project: project 
  end
end

json.set! "users" do
  @projects.each do |project|
    project.members.each do |member|
      if member.id != current_user.id 
        json.set! member.id do
          json.extract! member, :id, :email, :fname, :lname
          # json.partial! "api/users/user", user: member
          json.fullName member.fname + ' ' + member.lname
        end
      end
    end
  end
end