class Api::ProjectMembershipsController < ApplicationController

  def create
    @pm = ProjectMembership.new
    @pm.user_id = User.find_by(email: pm_params[:email]).id
    @pm.project_id = pm_params[:project_id]
    @pm.inviter_id = current_user.id
    @pm.role = pm_params[:role]
    
    # debugger
    if @pm.save
      render "api/project_memberships/show"
    else
      render json: @pm.errors.full_messages, status: 422
    end
  end

  def index
    @pms = ProjectMembership
      .includes(:project)
      .where("user_id = ?", current_user.id)
      .where.not(projects: { id: nil })
      .order(updated_at: :asc)
      .last(10)
      
      # .order("updated_at desc")
    # @pms = ProjectMembership
    #   .includes(:project)
    #   .where("user_id = ? AND request_status = ?", current_user.id, false)
    #   .where.not(projects: { id: nil })
  end

  def update
    @pm = ProjectMembership.find(params[:id]);
    # debugger
    if @pm.update_attributes(pm_params)
      render "api/project_memberships/show"
    else
      render json: @pm.errors.full_messages, status: 422
    end

  end

  private

  def pm_params
    params.require(:pm).permit(:email, :project_id, :role, :request_status, :inviter_id)
  end
end
