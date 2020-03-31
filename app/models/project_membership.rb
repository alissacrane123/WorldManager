class ProjectMembership < ApplicationRecord
  validates :user_id, uniqueness: { scope: :project_id }
  validates :user_id, :project_id, :role, presence: true
  
  belongs_to :project
  belongs_to :user
  belongs_to :inviter, foreign_key: :inviter_id, class_name: :User
end
