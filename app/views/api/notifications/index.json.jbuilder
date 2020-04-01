
@notifications.each do |notify|
  json.notifications do 
    json.set! notify.id do 
      json.extract! notify, :id, :user_id, :notifiable_id, :notifiable_type, :created_at, :updated_at
    end
  end

  json.pms do 
    if notify.notifiable_type == 'ProjectMembership'
      pm = notify.notifiable
      if pm.user_id && pm.inviter_id
        json.set! pm.id do 
          json.extract! pm, :id, :inviter_id, :user_id, :project_id, :request_status, :role, :created_at
        end
      end
    end
  end
end