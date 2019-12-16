class Post < ApplicationRecord
  validates :user_id, :body, presence: true 
  validates :body, length: { minimum: 2 }

  belongs_to :project, optional: true
  belongs_to :task, optional: true
  belongs_to :user

  
end
