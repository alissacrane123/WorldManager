class ProjectMembership < ApplicationRecord
  validates :user_id, uniqueness: { scope: :project_id }
  validates :user_id, :project_id, :role, presence: true
  
  belongs_to :project
  belongs_to :user
  belongs_to :inviter, foreign_key: :inviter_id, class_name: :User

  has_many :notifications, :as => :notifiable


  def create_notifications(user)
    if user == 'invitee'
      self.notifications.create!(user_id: self.user_id)
    elsif user == 'inviter'
      self.notifications.create!(user_id: self.inviter_id)
    end
  end
end
