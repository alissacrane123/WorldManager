class Task < ApplicationRecord
  belongs_to :project, dependent: :destroy
  belongs_to :user  

  validates :title, :description, :status, :project_id, :user_id, presence: true
end
