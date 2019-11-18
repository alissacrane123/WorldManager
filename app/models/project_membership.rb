class ProjectMembership < ApplicationRecord
  validates :user_id, uniqueness: { scope: :project_id }
  
  belongs_to :project, dependent: :destroy
  belongs_to :user, dependent: :destroy
end
