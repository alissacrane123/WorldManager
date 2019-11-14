json.set! project.id do
  json.extract! project, :id, :title, :owner_id, :category, :created_at
end