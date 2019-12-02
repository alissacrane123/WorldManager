class Api::ProjectMembershipsController < ApplicationController

  def create
    @pm = ProjectMembership.new
    @pm.user_id = User.find_by(email: pm_params[:email]).id
    @pm.project_id = pm_params[:project_id]
    @pm.role = pm_params[:role]
    
    if @pm.save
      render "api/project_memberships/show"
    else
      render json: @pm.errors.full_messages, status: 422
    end
  end

  def destroy

  end

  private

  def pm_params
    params.require(:pm).permit(:email, :project_id, :role)
  end
end
