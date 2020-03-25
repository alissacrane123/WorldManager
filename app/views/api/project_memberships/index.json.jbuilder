# debugger

@pms.each do |pm|
  json.set! pm.id do
    json.extract! pm, :id, :user_id, :project_id, :request_status, :role,:updated_at, :created_at
    json.projectName pm.project.title
    json.inviterName (pm.user.fname + ' ' + pm.user.lname)
  end
end