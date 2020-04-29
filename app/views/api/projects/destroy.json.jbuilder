json.set! "project" do
  json.extract! @project, :id, :alert_ids, :task_ids, :title, :owner_id, :category, :created_at, :pm_ids
  
end