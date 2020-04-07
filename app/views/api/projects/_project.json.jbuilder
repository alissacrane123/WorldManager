
# project_membership = project.project_memberships.select { |mem| mem.user_id == current_user.id }

# if project_membership.first && project_membership.first.admin
#   access = true
# else
#   access = false
# end

members = project.members.map { |mem| mem.id }

json.set! project.id do
  json.extract! project, :id, :title, :owner_id, :category, :created_at
  # json.adminAccess access
  json.memberIds members
end