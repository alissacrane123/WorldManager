class ProjectMembership < ApplicationRecord
  validates :user_id, uniqueness: { scope: :project_id }
  validates :user_id, :project_id, presence: true
  # validates :admin, inclusion: { in: ["admin", "Bad", "Neutral"] }
  
  belongs_to :project
  belongs_to :user
  belongs_to :inviter, foreign_key: :inviter_id, class_name: :User, optional: true

  has_many :alerts, :as => :alertable


  def create_alerts(user)
    if user == 'invitee'
      self.alerts.create!(user_id: self.user_id)
    elsif user == 'inviter'
      self.alerts.create!(user_id: self.inviter_id)
    end
  end
end
