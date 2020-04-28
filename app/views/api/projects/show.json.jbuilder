

json.set! "project" do
  json.partial! "api/projects/project", project: @project 
  
end

current_user_id = current_user.id 

json.set! "tasks" do
  @project.tasks.each do |task|

    # json.partial! "api/tasks/task", task: task
    taskOwner = task.user
    taskProject = task.project
    ownerName = taskOwner.id == current_user_id ? "You" : taskOwner.fname + ' ' + taskOwner.lname
    ownerInitials = taskOwner.fname[0] + taskOwner.lname[0]

    json.set! task.id do
      json.extract! task, :id, :title, :reminder, :description, :status, :project_id, :due_date,:user_id, :created_at, :priority
      json.owner ownerName
      json.ownerInitials ownerInitials
      if taskProject
        json.project_cat taskProject.category
        json.project_name taskProject.title
      end
      if task.due_date
        json.dueDate task.due_date.strftime("%m/%d/%Y")
      end
      json.draggable (task.user_id == current_user_id || taskProject.owner_id == current_user_id) 
    end
  end
end

json.set! "users" do 
  @project.members.each do |member|
    if member.id != current_user_id
      json.set! member.id do
        json.extract! member, :id, :email, :fname, :lname
        # json.partial! "api/users/user", user: member
      end
    end
  end
end