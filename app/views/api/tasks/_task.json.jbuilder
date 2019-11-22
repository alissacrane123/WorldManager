taskOwner = task.user
ownerName = taskOwner.id == current_user.id ? "You" : taskOwner.fname + ' ' + taskOwner.lname

json.set! task.id do
  json.extract! task, :id, :title, :description, :status, :project_id, :user_id, :created_at, :priority
  json.owner ownerName
  json.project_cat task.project.category
  json.project_name task.project.title
  json.due_date task.due_date.strftime("%m/%d/%Y")
  json.draggable (task.user_id == current_user.id || task.project.owner_id == current_user.id) 
end