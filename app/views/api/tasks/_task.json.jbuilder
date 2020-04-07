taskOwner = task.user
taskProject = task.project
ownerName = taskOwner.id == current_user.id ? "You" : taskOwner.fname + ' ' + taskOwner.lname
ownerInitials = taskOwner.fname[0] + taskOwner.lname[0]

json.set! task.id do
  json.extract! task, :id, :title, :description, :status, :project_id, :due_date,:user_id, :created_at, :priority
  json.owner ownerName
  json.ownerInitials ownerInitials
  if taskProject
    json.project_cat taskProject.category
    json.project_name taskProject.title
  end
  if task.due_date
    json.dueDate task.due_date.strftime("%m/%d/%Y")
  end
  json.draggable (task.user_id == current_user.id || taskProject.owner_id == current_user.id) 
end