class ProjectMembership < ApplicationRecord
  validates :user_id, uniqueness: { scope: :project_id }
  validates :user_id, :project_id, :request_status, :role, presence: true
  
  belongs_to :project, dependent: :destroy
  belongs_to :user, dependent: :destroy
end
