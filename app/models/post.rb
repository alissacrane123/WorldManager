class Post < ApplicationRecord
  validates :user_id, :body, presence: true 

  belongs_to :project
  belongs_to :task
  belongs_to :user

  
end
