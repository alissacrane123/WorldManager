class Task < ApplicationRecord
  belongs_to :project
  belongs_to :user  

  has_one :project_owner, 
    through: :project,
    source: :owner


  validates :title, :status, :project_id, :user_id, presence: true
end
