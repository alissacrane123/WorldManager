class Api::TasksController < ApplicationController
      before_action :require_logged_in

  # def create
  #   @task = Task.new(task_params)
  #   @task.user_id = User.find_by(email: task_params[:email])

  #   if @task.save
  #     render "api/tasks/show"
  #   else
  #     render json: @task.errors.full_messages, status: 422
  #   end
  # end

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
    @tasks = current_user.tasks.includes(:project, :user)
  end

  def update
    @task = Task.find(params[:id]);

    # if @task.project_owner.id == current_user.id || @task.user_id == current_user.id
      if @task.update_attributes(task_params)
        render "api/tasks/show"
      else
        render json: @task.errors.full_messages, status: 422
      end
    # else
    #   render json: ["You can only edit your assigned tasks"], status: 422
    # end
  end

  def destroy
    current_user.tasks.find(params[:id]).destroy
  end

  private

  def task_params
    params.require(:task).permit(:title, :description, :status, :project_id, :email)
  end

end
