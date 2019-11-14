taskOwner = task.user
ownerName = taskOwner.id == current_user.id ? "You" : taskOwner.fname + ' ' + taskOwner.lname

json.set! task.id do
  json.extract! task, :id, :title, :description, :status, :project_id, :user_id, :created_at, :priority
  json.owner ownerName
end