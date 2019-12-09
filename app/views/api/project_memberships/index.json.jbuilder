@pms.each do |pm|
  json.set! pm.id do
    json.extract! pm, :id, :user_id, :project_id, :request_status, :role, :created_at
    json.projectName pm.project.title
  end
end