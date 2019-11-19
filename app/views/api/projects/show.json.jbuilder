

json.set! "project" do
  json.partial! "api/projects/project", project: @project 
  
end



json.set! "tasks" do
  @project.tasks.each do |task|
    json.partial! "api/tasks/task", task: task
       
  end
end

json.set! "users" do 
  @project.members.each do |member|
    json.set! member.id do
      json.partial! "api/users/user", user: member
    end
  end
end