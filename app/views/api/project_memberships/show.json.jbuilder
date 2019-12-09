# debugger
# json.partial! "api/users/user", user: @pm.user
json.set! "user" do
  json.partial! "api/users/user", user: @pm.user
end

json.set! "pm" do
  json.set! @pm.id do
    json.extract! @pm, :id, :user_id, :project_id, :request_status, :role, :created_at
  end
end