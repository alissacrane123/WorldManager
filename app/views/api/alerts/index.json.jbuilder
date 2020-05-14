if @alerts
  cur_user = current_user
  current_user_id = cur_user.id 

  @alerts.each do |alert|

    json.alerts do 
      json.set! alert.id do 
        json.extract! alert, :id, :user_id, :checked, :alertable_id, :alertable_type, :created_at, :updated_at
      end
    end 

    
    alertable = alert.alertable

    json.pms do
      if alert.alertable_type == 'ProjectMembership'
        pm = alertable
        inviter = pm.inviter
        user = pm.user 
        
        json.set! pm.id do
          json.extract! pm, :id, :user_id, :inviter_id, :project_id, :accepted, :admin,:updated_at, :created_at
          json.projectName pm.project.title
          json.inviterName (inviter.fname + ' ' + inviter.lname)
          json.inviteeName (user.fname + ' ' + user.lname)
        end
      end
    end

    # json.pms do 
    #   if alert.alertable_type == 'ProjectMembership'
    #     # pm = alertable
    #     project = alertable.project

    #     if alertable.accepted && alertable.user_id != current_user_id
    #       invitee = alertable.user
    #       json.set! alertable.id do 
    #         json.extract! alertable, :id, :user_id, :inviter_id, :project_id, :accepted, :admin,:updated_at, :created_at
    #         json.inviteeName (invitee.fname + ' ' + invitee.lname)
    #         json.inviterName (cur_user.fname + ' ' + cur_user.lname)
    #         json.projectName project.title 
    #       end
    #     elsif !alertable.accepted && alertable.user_id == current_user
    #       inviter = alertable.inviter 
    #       json.set! alertable.id do
    #         json.extract! alertable, :id, :user_id, :inviter_id, :project_id, :accepted, :admin,:updated_at, :created_at
    #         json.inviterName (inviter.fname + ' ' + inviter.lname)
    #         json.inviteeName (cur_user.fname + ' ' + cur_user.lname)
    #         json.projectName project.title 
    #       end
    #     end
    #   end
    # end

    json.tasks do 
      if alert.alertable_type == 'Task'
        task = alertable
        json.partial! 'api/tasks/task', task: task 
      end
    end
  end
end