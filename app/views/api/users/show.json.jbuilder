
json.partial! "api/users/user", user: @user 

# json.user
#   json.set! @user.id do
#     json.partial! "api/users/user", user: @user 
#   end
# end

# if @user.id == current_user.id 

#   json.projects do
#     @user.projects.each do |project|
#       json.set! project.id do 
#         json.partial! "api/projects/project", project: project
#       end
#     end
#   end


# end
