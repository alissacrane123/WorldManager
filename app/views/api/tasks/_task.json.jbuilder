taskOwner = task.user
ownerName = taskOwner.id == current_user.id ? "You" : taskOwner.fname + ' ' + taskOwner.lname
ownerInitials = taskOwner.fname[0] + taskOwner.lname[0]

json.set! task.id do
  json.extract! task, :id, :title, :description, :status, :project_id, :user_id, :created_at, :priority
  json.owner ownerName
  json.ownerInitials ownerInitials
  json.project_cat task.project.category
  json.project_name task.project.title
  json.dueDate task.due_date.strftime("%m/%d/%Y")
  json.draggable (task.user_id == current_user.id || task.project.owner_id == current_user.id) 
end