# debugger
# json.partial! "api/users/user", user: @pm.user

user = @pm.user 

json.set! "user" do
  json.partial! "api/users/user", user: user
end

json.set! "pm" do
  json.set! @pm.id do
    json.extract! @pm, :id, :user_id, :project_id, :accepted, :admin, :created_at

    inviter = @pm.inviter
    
    # // idk if i need
    json.projectName @pm.project.title
    json.inviterName (inviter.fname + ' ' + inviter.lname)
    json.inviteeName (user.fname + ' ' + user.lname)
  end
end