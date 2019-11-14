class ProjectMembership < ApplicationRecord
  belongs_to :project, dependent: :destroy
  belongs_to :user, dependent: :destroy
end
