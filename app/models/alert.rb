class Alert < ApplicationRecord
  validates :checked, inclusion: { in: [ true, false ] }
  validates :user_id, :alertable_type, :alertable_id, presence: true

  belongs_to :alertable, :polymorphic => true 

  # belongs_to :task,
  #   -> { where alertable_type: 'Task' }, 
  #   foreign_key: :alertable_id,
  #   optional:true


  def self.create_alerts
    ProjectMembership.all.each do |pm|
      if (pm.user_id != pm.inviter_id) && pm.inviter_id
        pm.alerts.create!(user_id: pm.user_id)
      end
    end

    
  end

  def self.fetch_recent_alerts(user_id)
    Alert.includes(:alertable)
          .where('user_id = ? AND checked = ?', user_id, true)
          .order('updated_at asc')
          .limit(10)
  end

  def self.fetch_task_alerts(user_id)
    new_alerts = Alert.includes(alertable: [:project, :user])
      .where('user_id = ? AND alertable_type = ?', user_id, 'Task')
      .where('checked = ?', false)
      .limit(30)

    
  end

  def self.fetch_pm_alerts(user_id)
    new_alerts = Alert.includes(alertable: [:project, :user, :inviter])
      .where('user_id = ? AND alertable_type = ?', user_id, 'ProjectMembership')
      .where('checked = ?', false)
      .limit(30)

    if new_alerts.length < 1
      new_alerts = Alert.includes(alertable: [:project, :user, :inviter])
      .where('user_id = ? AND alertable_type = ?', user_id, 'ProjectMembership')
      .order('updated_at asc')
      .limit(5)
    end
    new_alerts
  end
end
