# debugger
# json.partial! "api/users/user", user: @pm.user

user = @pm.user 
project = @pm.project

# json.set! "user" do
#   json.partial! "api/users/user", user: user
# end

json.set! "project" do 
  json.set! project.id do
    json.extract! project, :id, :title, :owner_id, :category, :created_at
  end
end

json.set! "pm" do
  json.set! @pm.id do
    json.extract! @pm, :id, :user_id, :project_id, :inviter_id, :accepted, :admin, :created_at

    inviter = @pm.inviter
    
    # // idk if i need
    json.projectName project.title
    json.inviterName (inviter.fname + ' ' + inviter.lname)
    json.inviteeName (user.fname + ' ' + user.lname)
  end
end

tasks = project.tasks.select { |task| task.user_id == current_user.id }

json.set! "tasks" do 
  tasks.each do |task|
    json.partial! "api/tasks/task", task: task
    #  json.projectName project.title 
  end

end



json.set! "alerts" do 



  @pm.fetch_task_alerts.each do |alert|
    json.set! alert.id do 
      json.extract! alert, :id, :user_id, :checked, :alertable_id, :alertable_type
     
    end
  end
end