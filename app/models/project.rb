class Project < ApplicationRecord
  has_many :tasks, dependent: :destroy
  has_many :project_memberships
  has_many :members, through: :project_memberships, source: :user
  belongs_to :owner, foreign_key: :owner_id, class_name: :User

  validates :title, :owner_id, :category, presence: true
end
