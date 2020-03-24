class Task < ApplicationRecord
  validates :title, :user_id, presence: true
  
  belongs_to :project, optional:true
  belongs_to :user
  has_one :project_owner, 
    through: :project,
    source: :owner


  def fetch_filtered_tasks(filters)
    valid_filters = []
    filters.each  do |filter|
      if filter
        
      end
    end
  end

  def self.fetch_user_tasks(user_ids) 
    tasks = []
    Task.where('user_id IN (?)', user_ids)
  end 


  def self.fetch_month_tasks(month)
    month = month.split('/')[0]
    year = month.split('/')[-1]
    ending_day =  Date.new(year.to_i,month.to_i,1).next_month.prev_day.day
    month_start = DateTime.strptime("#{month}/01/#{year}", '%m/%d/%Y')
    month_end = DateTime.strptime("#{month}/#{ending_day}/#{year}", '%m/%d/%Y')
    
    Task.where('due_date >= ? AND due_date <= ? AND user_id = ?', month_start, month_end, current_user.id)
  end

  def self.fetch_day_tasks(day)
    day = DateTime.strptime(day, '%m/%d/%Y')

    Task.where('due_date >= ? AND due_date <= ?', day.beginning_of_day, day.end_of_day)
  end

  def self.fetch_week_tasks(week)
    start_day = DateTime.strptime(Date.today.strftime("%m/%d/%Y"), "%m/%d/%Y")
    ending_day = DateTime.strptime(week, '%m/%d/%Y')

    Task.where('due_date >= ? AND due_date <= ?', start_day, ending_day.end_of_day)
  end
end
