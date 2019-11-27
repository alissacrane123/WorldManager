class Task < ApplicationRecord
  belongs_to :project, optional:true
  belongs_to :user  

  has_one :project_owner, 
    through: :project,
    source: :owner


  validates :title, :user_id, presence: true
end
