class Api::ProjectsController < ApplicationController
  before_action :require_logged_in

  def create
    @project = Project.new(project_params)
    @project.owner_id = current_user.id

    if @project.save
      ProjectMembership.create!(user_id: @project.owner_id, project_id: @project.id, role: "admin")
      # new_member = ProjectMembership.new(pm_params)
      # new_member.project_id = @project.id
      # new_member.save!

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
    current_user.projects.find(params[:id]).destroy
  end

  private

  def project_params
    params.require(:project).permit(:title, :owner_id, :category)
  end

  def pm_params
    params.require(:pm).permit(:email, :role)
  end
end
