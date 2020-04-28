class Api::ProjectsController < ApplicationController
  before_action :require_logged_in

  def create
    @project = Project.new(project_params)
    @project.owner_id = current_user.id
    @project.title = titleize(project_params[:title])

    if @project.save
      @project.create_pm
      render "api/projects/show"
    else
      render json: @project.errors.full_messages
    end
  end

  def show  
    @project = Project.includes(:tasks, :members ).find(params[:id])
  end

  def index
    current_user_id = current_user.id
    # @projects = current_user.projects
    @projects = Project.includes(:members)
                  .joins(:project_memberships)
                  .where('project_memberships.user_id = ? and project_memberships.accepted = ?', current_user_id, true)
  end

  def update
    @project = current_user.projects.find(params[:id])
    if @project.update_attributes(project_params)
      render "api/projects/show"
    else
      render json: @project.errors.full_messages
    end
  end

  def destroy
    @project = Project.find(params[:id])
    @project.destroy!
    render "api/projects/show"
  end

  private

  def project_params
    params.require(:project).permit(:title, :owner_id, :category)
  end

  def pm_params
    params.require(:pm).permit(:email, :admin)
  end
end
