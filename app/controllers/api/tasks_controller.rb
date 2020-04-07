class Api::TasksController < ApplicationController
  before_action :require_logged_in

  def create
    @task = Task.new(task_params);
    @task.due_date = DateTime.strptime(task_params[:due_date], '%m/%d/%Y').end_of_day
    @task.title = titleize(task_params[:title])
    
    if @task.save
      render "api/tasks/show"
    else
      render json: @task.errors.full_messages, status: 422
    end
  end

  def show 
    @task = current_user.tasks.find(params[:id]).includes(:project, :user)
  end

  def search
    search, search_value = params[:search], params[:search_value]

    user_id = current_user.id
    project_id = current_user.projects.map { |proj| proj.id }
    # debugger
    if search == 'upcoming'
      tasks = Task.fetch_upcoming_tasks(user_id, project_id )
    elsif search == 'overdue'
      tasks = Task.fetch_overdue_tasks(user_id, project_id )
    elsif search == 'week'
      tasks = Task.includes(:user, :project).fetch_week_tasks(search_value, user_id, project_id)
    end

    @tasks = tasks
    render "api/tasks/index"
  end

  def index
    start_date, end_date, created_at = params[:start_date], params[:end_date], params[:created_at]
    user_id, project_id = params[:user_id], params[:project_id]
    status, priority = params[:status], params[:priority]
    
    start_date = DateTime.strptime(start_date, '%m/%d/%Y').beginning_of_day
    end_date = DateTime.strptime(end_date, '%m/%d/%Y').end_of_day

    if project_id == 'all'
      project_id = current_user.projects.map { |proj| proj.id }
    end

    # label_values = ['upcoming', 'curr_week', 'curr_month', 'overdue']


    tasks = Task.where('user_id IN (?)', user_id)
      .where('project_id IN (?) OR project_id IS NULL', project_id)
      .where('due_date <= ? AND due_date >= ?', end_date, start_date)
      .where('status IN (?)', status)
      .where('priority IN (?)', priority)
      # .where('status != ?', 'done')
  

    # if tasks.length < 10 && params[:label] == 'upcoming'
    #   tasks = Task.where('user_id IN (?)', user_id)
    #   .where('project_id IN (?) OR project_id IS NULL', project_id)
    #   .where('due_date >= ?', start_date)
    #   .where('status IN (?)', status)
    #   .where('priority IN (?)', priority)
    #   .order('due_date ASC')
    #   .limit(10)    
    # end

    # debugger

    @tasks = tasks

  end

  # def index
  #   start_date, end_date, created_at = params[:start_date], params[:end_date], params[:created_at]
  #   user_id, project_id = params[:user_id], params[:project_id]
  #   status, priority = params[:status], params[:priority]

  #   all_filters = [["start_date", start_date], ["end_date",end_date], ["created_at",created_at], ["user_id",user_id], ["project_id",project_id], ["status",status], ["priority",priority]]


  #   filters = []
  #   filter_value = []
  #   id_filters = []
  #   id_filter_value = []
  #   user_id_filters = []
  #   user_id_filter_value = []
  #   word_filters = []
  #   word_filter_values = []


  #   all_filters.each_with_index do |filter, i|
  #     filter_name = filter[0]

  #     if i == 0 && filter[1].length > 0
  #       filters << "due_date >= ?"
  #       filter_value << format_date(filter[1])
  #     elsif filter[1] && i == 1
  #       filters << "due_date <= ?"
  #       filter_value << format_date(filter[1])
  #     elsif i == 2 && filter[1].length > 0
  #       filters << "created_at >= ?"
  #       filter_value << format_date(filter[1])
  #     elsif [3,4].include?(i) && filter[1]
  #       value = filter[1].map(&:to_i)

  #       value.each do |val|
  #         if filter_name == 'project_id'
  #           id_filters << "#{filter_name} = ?" 
  #           id_filter_value << val
  #         else
  #           user_id_filters << "#{filter_name} = ?" 
  #           user_id_filter_value << val
  #         end
  #       end
  #     elsif filter[1] && ![0,1,2].include?(i)
  #       value =  filter[1]

  #       value.each do |val|
  #         word_filters << "#{filter_name} = ?"
  #         word_filter_values << val
  #       end

  #     end
  #   end

  #   query = filters.join(' AND ')
  #   query2 = id_filters.join(' OR ')
  #   query3 = word_filters.join(' OR ')
  #   query4 = user_id_filters.join(' OR ')
  #   # debuggc/er
  #   @tasks = Task.where(query, *filter_value).where(query2, *id_filter_value).where(query3, *word_filter_values).where(query4, *user_id_filter_value)
    
  # end


  def update
    @task = Task.find(params[:id]);

    if new_date_params[:new_date] && new_date_params[:new_date].length <= 10
      @task.update_attributes(due_date: DateTime.strptime(new_date_params[:new_date], '%m/%d/%Y'))
    end

    if @task.update_attributes(update_task_params)
      render "api/tasks/show"
    else
      render json: @task.errors.full_messages, status: 422
    end

  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy!
    render "api/tasks/show"
  end

  private

  def task_params
    params.require(:task).permit(:title, :due_date, :user_id, :priority, :description, :status, :project_id, :email)
  end

  def new_date_params
    params.require(:task).permit(:new_date)
  end

  def update_task_params
      params.require(:task).permit(:title, :user_id, :priority, :description, :status, :project_id, :email)
  end

end

  # def create
  #   @tasks = []
    
  #   params[:tasks].values.map do |task|
  #     new_task = Task.new()
      
  #     new_task.title = task["title"]
  #     new_task.description = task["description"]
  #     new_task.status = task["status"]
  #     if task["project_id"]
  #       new_task.project_id = task["project_id"]
  #     end
  #     if task["email"]
  #       new_task.user_id = User.find_by(email: task["email"]).id
  #     else
  #       new_task.user_id = current_user.id
  #     end
  #     new_task.due_date = DateTime.strptime(task["due_date"], '%m/%d/%Y')
  #     if new_task.save
  #       @tasks << new_task
  #     else 
  #       new_task.save!
  #     end
  #     # debugger
  #   end
    
  #   render "api/tasks/index"
  # end

  #   def index
  #   if params[:filter] == 'all'
  #     @tasks = current_user.project_tasks
  #   elsif params[:filter] == 'month'
  #     @tasks = Task.fetch_month_tasks(params[:date])

  #     # month = params[:date].split('/')[0]
  #     # year = params[:date].split('/')[-1]
  #     # ending_day =  Date.new(year.to_i,month.to_i,1).next_month.prev_day.day
  #     # month_start = DateTime.strptime("#{month}/01/#{year}", '%m/%d/%Y')
  #     # month_end = DateTime.strptime("#{month}/#{ending_day}/#{year}", '%m/%d/%Y')
  #     # @tasks = Task.where('due_date >= ? AND due_date <= ? AND user_id = ?', month_start, month_end, current_user.id)
  #   elsif params[:filter] == 'day'
  #     @tasks = Task.fetch_day_tasks(params[:date])

  #     # day = DateTime.strptime(params[:date], '%m/%d/%Y')
  #     # @tasks = Task.where('due_date >= ? AND due_date <= ?', day.beginning_of_day, day.end_of_day)
  #   elsif params[:filter] == 'week'
  #     @tasks = Task.fetch_week_tasks(params[:date])

  #     # start_day = DateTime.strptime(Date.today.strftime("%m/%d/%Y"), "%m/%d/%Y");
  #     # ending_day = DateTime.strptime(params[:date], '%m/%d/%Y');
  #     # @tasks =  Task.where('due_date >= ? AND due_date <= ?', start_day, ending_day.end_of_day);
  #   else 
  #     @tasks = Task.includes(:project).where(user_id: current_user.id)
  #   end
  # end

      # all_filters.each_with_index do |filter, i|
    #   filter_name = filter[0]

    #   if i == 0 && filter[1].length > 0
    #     filters << "due_date >= ?"
    #     filter_value << format_date(filter[1])
    #   elsif filter[1] && i == 1
    #     filters << "due_date <= ?"
    #     filter_value << format_date(filter[1])
    #   elsif i == 2 && filter[1].length > 0
    #     filters << "created_at >= ?"
    #     filter_value << format_date(filter[1])
    #   # elsif [3,4].include(i) && filter[1]
    #   #   value = filter[1].map(&:to_i)
    #   #   filters 
    #   elsif filter[1] && ![0,1,2].include?(i)
    #     value = [3,4].include?(i) ? filter[1].map(&:to_i) : filter[1]
    #     filters << "#{filter_name} = ?"
    #     filter_value << value
    #   end
    # end