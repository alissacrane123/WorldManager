json.set! "project" do
  json.extract! @project, :id, :title, :owner_id, :category, :created_at, :pm_ids
  
end