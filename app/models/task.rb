class Task < ApplicationRecord
  validates :title, :user_id, presence: true
  validates :status, inclusion: { in: ['todo', 'doing', 'done']}
  validates :priority, inclusion: { in: ['low', 'medium', 'high']}

  # belongs_to :inviter, optional:true
  belongs_to :project, optional:true
  belongs_to :user
  has_one :project_owner, 
    through: :project,
    source: :owner

  has_many :alerts, :as => :alertable, dependent: :destroy

  def self.create_alerts 
    Task.all.each do |task|
      task.alerts.create!(user_id: task.user_id)
    end
  end

  def fetch_filtered_tasks(filters)
    valid_filters = []
    filters.each  do |filter|
      if filter
        
      end
    end
  end

  def self.fetch_reminders(user_id) 
    Task.where('user_id = ? and status != ? and reminder = ?', user_id, 'done', true)
  end

  def self.fetch_user_tasks(user_ids) 
    tasks = []
    Task.where('user_id IN (?)', user_ids)
  end 

  def self.fetch_overdue_tasks(user_id, project_id)
    end_date = DateTime.now.beginning_of_day

    Task.where('user_id = ?', user_id)
      .where('project_id IN (?) OR project_id IS NULL', project_id)
      .where('due_date < ?', end_date)
      .where('status IN (?)', ["todo", "doing"])
      .where('reminder = ?', false)
      .order('due_date ASC')
      .limit(10)   
  end

  def self.fetch_upcoming_tasks(user_id, project_id)
    start_date = DateTime.now.beginning_of_day

    Task.where('user_id = ?', user_id)
      .where('project_id IN (?) OR project_id IS NULL', project_id)
      .where('due_date >= ?', start_date)
      .where('status IN (?)', ["todo", "doing"])
      .where('reminder = ?', false)
      .order('due_date ASC')
      .limit(10)   
  end


  def self.fetch_month_tasks(month)
    month = month.split('/')[0]
    year = month.split('/')[-1]
    ending_day =  Date.new(year.to_i,month.to_i,1).next_month.prev_day.day
    month_start = DateTime.strptime("#{month}/01/#{year}", '%m/%d/%Y')
    month_end = DateTime.strptime("#{month}/#{ending_day}/#{year}", '%m/%d/%Y')
    
    Task.where('due_date >= ? AND due_date <= ? AND user_id = ?', month_start, month_end, current_user.id)
        .where('reminder = ?', false)
  end

  def self.fetch_day_tasks(day)
    day = DateTime.strptime(day, '%m/%d/%Y')

    Task.where('due_date >= ? AND due_date <= ?', day.beginning_of_day, day.end_of_day)
  end

  def self.fetch_week_tasks(week, user_id = nil, project_id = nil)
    start_day = DateTime.strptime(Date.today.strftime("%m/%d/%Y"), "%m/%d/%Y")
    ending_day = DateTime.strptime(week, '%m/%d/%Y')

    if user_id && project_id 
      Task.where('user_id = ?', user_id)
      .where('project_id IN (?) OR project_id IS NULL', project_id)
      .where('status IN (?)', ["todo", "doing"])
      .where('due_date >= ? AND due_date <= ?', start_day, ending_day.end_of_day)
      .where('reminder = ?', false)
      # .order('due_date ASC')
    else
      Task.where('due_date >= ? AND due_date <= ?', start_day, ending_day.end_of_day)
        .where('reminder = ?', false)
    end
  end
end
# (byebug) user_id
# 9
# (byebug) project_id
# [11, 12, 13]
# (byebug) search
# "week"
# (byebug) search_
# "04/12/2020"