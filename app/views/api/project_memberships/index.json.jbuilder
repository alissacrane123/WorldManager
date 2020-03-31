# debugger

@pms.each do |pm|
  json.set! pm.id do
    json.extract! pm, :id, :user_id, :inviter_id, :project_id, :request_status, :role,:updated_at, :created_at
    json.projectName pm.project.title
    json.inviterName (pm.inviter.fname + ' ' + pm.inviter.lname)
    json.inviteeName (pm.user.fname + ' ' + pm.user.lname)

  end
end