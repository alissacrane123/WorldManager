
json.partial! "api/users/user", user: @user 

# json.user
#   json.set! @user.id do
#     json.partial! "api/users/user", user: @user 
#   end
# end

# if @user.id == current_user.id 

  # json.projects do
  #   @user.projects.each do |project|
  #     json.set! project.id do 
  #       json.extract! project, :id, :title, :owner_id, :category, :created_at
  #     end
  #   end
  # end


# end
