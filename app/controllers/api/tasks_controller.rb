class Api::TasksController < ApplicationController
      before_action :require_logged_in

  def create
    @task = Task.new(task_params)

    if @task.save
      render "api/tasks/show"
    else
      render json: @task.errors.full_messages, status: 422
    end
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
    params.require(:task).permit(:title, :description, :status, :project_id, :user_id)
  end
end
