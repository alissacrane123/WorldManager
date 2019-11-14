class Api::ProjectsController < ApplicationController
  before_action :require_logged_in

  def create
    @project = Project.new(project_params)
    @project.owner_id = current_user.id

    if @project.save
      ProjectMembership.create!(user_id: @project.owner_id, project_id: @project.id)
      render "api/projects/show"
    else
      render json: @project.errors.full_messages
    end
  end

  def show  
    @project = Project.includes(:tasks, :members, :owner).find(params[:id])
  end

  def index
    current_user_id = current_user.id
    @projects = Project.includes(:tasks, :members).where(owner_id: current_user_id); 
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
    current_user.projects.find(params[:id]).destroy
  end

  private

  def project_params
    params.require(:project).permit(:title, :owner_id, :category)
  end
end
