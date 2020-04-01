class Project < ApplicationRecord
  has_many :tasks, dependent: :destroy
  has_many :project_memberships, dependent: :destroy
  has_many :members, through: :project_memberships, source: :user
  belongs_to :owner, foreign_key: :owner_id, class_name: :User



  validates :title, :owner_id, :category, presence: true


  def create_pm
    ProjectMembership.create!(user_id: self.owner_id, project_id: self.id, admin: true, accepted:true, inviter_id: nil)
  end
end
