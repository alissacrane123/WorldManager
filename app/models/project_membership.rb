class ProjectMembership < ApplicationRecord
  validates :user_id, uniqueness: { scope: :project_id }
  validates :user_id, :project_id, presence: true
  # validates :admin, inclusion: { in: ["admin", "Bad", "Neutral"] }
  
  belongs_to :project
  belongs_to :user
  belongs_to :inviter, foreign_key: :inviter_id, class_name: :User, optional: true

  has_many :alerts, :as => :alertable, dependent: :destroy


  def create_alerts(user)
    if user == 'invitee'
      self.alerts.create!(user_id: self.user_id)
    elsif user == 'inviter'
      self.alerts.create!(user_id: self.inviter_id)
    end

    tasks = Task.where('project_id = ? and user_id = ?', self.project_id, self.user_id)
    tasks.each do |task|
      Alert.create!(user_id: self.user_id, alertable_id: task.id, alertable_type: 'Task')
    end
  end

  def fetch_task_alerts
    tasks = Task.where('user_id = ? and project_id = ?', self.user_id, self.project_id)
    taskIds = tasks.map { |task| task.id }
    Alert.where('alertable_type = ? and alertable_id in (?) and user_id = ?', 'Task', taskIds, self.user_id)
  end
end
