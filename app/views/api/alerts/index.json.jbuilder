@alerts.each do |alert|
  json.alerts do 
    json.set! alert.alertable_id do 
      json.extract! alert, :id, :user_id, :checked, :alertable_id, :alertable_type
    end
  end 

  json.pms do
    if alert.alertable_type == 'ProjectMembership'
      pm = alert.alertable 
      json.set! pm.id do
        json.extract! pm, :id, :user_id, :inviter_id, :project_id, :accepted, :admin,:updated_at, :created_at
        json.projectName pm.project.title
        json.inviterName (pm.inviter.fname + ' ' + pm.inviter.lname)
        json.inviteeName (pm.user.fname + ' ' + pm.user.lname)
      end
    end
  end

  json.tasks do 
    if alert.alertable_type == 'Task'
      task = alert.alertable 
      json.partial! 'api/tasks/task', task: task 
    end
  end
end