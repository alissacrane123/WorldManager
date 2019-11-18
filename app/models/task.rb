class Task < ApplicationRecord
  belongs_to :project, dependent: :destroy
  belongs_to :user  

  has_one :project_owner, 
    through: :project,
    source: :owner


  validates :title, :description, :status, :project_id, :user_id, presence: true
end
