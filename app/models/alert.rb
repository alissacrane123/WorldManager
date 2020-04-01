class Alert < ApplicationRecord
  validates :checked, inclusion: { in: [ true, false ] }
  validates :user_id, :alertable_type, :alertable_id, presence: true

  belongs_to :alertable, :polymorphic => true 

  def self.create_alerts
    ProjectMembership.all.each do |pm|
      if (pm.user_id != pm.inviter_id) && pm.inviter_id
        # debugger
        pm.alerts.create!(user_id: pm.user_id)
      end
    end
  end
end
