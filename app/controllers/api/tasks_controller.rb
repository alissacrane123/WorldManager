class Api::TasksController < ApplicationController
      before_action :require_logged_in


  def create
    @tasks = []
    
    params[:tasks].values.map do |task|
      new_task = Task.new()
      
      new_task.title = task["title"]
      new_task.description = task["description"]
      new_task.status = task["status"]
      new_task.project_id = task["project_id"]
      new_task.user_id = User.find_by(email: task["email"]).id
      
      if new_task.save
        @tasks << new_task
      end
    end
    
    render "api/tasks/index"
  end

  def show 
    @task = current_user.tasks.find(params[:id]).includes(:project, :user)
  end

  def index
    if params[:filter] == 'all'
      @tasks = current_user.project_tasks
    elsif params[:filter] == 'month'
      month = params[:date].split('/')[0]
      year = params[:date].split('/')[-1]
      ending_day =  Date.new(year.to_i,month.to_i,1).next_month.prev_day.day
      month_start = DateTime.strptime("#{month}/01/#{year}", '%m/%d/%Y')
      month_end = DateTime.strptime("#{month}/#{ending_day}/#{year}", '%m/%d/%Y')
      
      @tasks = Task.where('due_date >= ? AND due_date <= ? AND user_id = ?', month_start, month_end, current_user.id)
    elsif params[:filter] == 'day'
      day = DateTime.strptime(params[:day], '%m/%d/%Y')
      @tasks = Task.where('due_date >= ? AND due_date <= ?', day.beginning_of_day, day.end_of_day)
    else 
      @tasks = Task.includes(:project, :user).where(user_id: current_user.id)
    end
  end

  def update
    @task = Task.find(params[:id]);

    if @task.update_attributes(task_params)
      render "api/tasks/show"
    else
      render json: @task.errors.full_messages, status: 422
    end

  end

  def destroy
    current_user.tasks.find(params[:id]).destroy
  end

  private

  def task_params
    params.require(:task).permit(:title, :priority, :description, :status, :project_id, :email)
  end

end
