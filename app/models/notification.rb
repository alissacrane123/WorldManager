class Notification < ApplicationRecord
  validates :checked, inclusion: { in: [ true, false ] }
  validates :user_id, :notifiable_type, :notifiable_id, presence: true

  belongs_to :notifiable, :polymorphic => true 

  # def self.create_notifications
  #   ProjectMembership.all.each do |pm|
  #     if (pm.user_id != pm.inviter_id) && pm.inviter_id
  #       debugger
  #       pm.notifications.create!(user_id: pm.user_id)
  #     end
  #   end
  # end
end
