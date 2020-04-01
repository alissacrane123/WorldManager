class Api::ProjectsController < ApplicationController
  before_action :require_logged_in

  def create
    @project = Project.new(project_params)
    @project.owner_id = current_user.id
    @project.title = titleize(project_params[:title])

    if @project.save
      # ProjectMembership.create!(user_id: @project.owner_id, project_id: @project.id, admin: "admin", accepted:true, inviter_id: @project.owner_id)
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
    # @projects = Project.includes(:tasks, :members).where(owner_id: current_user_id); 
    owned_projects = Project.includes(:tasks, :members).where(owner_id: current_user_id);
    
    member_projects = current_user.projects
    @projects = owned_projects + member_projects
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
    # current_user.projects.find(params[:id]).destroy
    @project = Project.find(params[:id])
    @project.destroy!
      render "api/projects/show"
    # else 
      # render json: @project.errors.full_messages
    # end
  end

  private

  def project_params
    params.require(:project).permit(:title, :owner_id, :category)
  end

  def pm_params
    params.require(:pm).permit(:email, :admin)
  end
end
