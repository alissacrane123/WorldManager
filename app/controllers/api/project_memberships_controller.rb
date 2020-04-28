class Api::ProjectMembershipsController < ApplicationController

  def create
    @pm = ProjectMembership.new
    user = User.find_by(email: pm_params[:email])
    if !user 
      render json: ["Sorry, we couldn't find a user with that email."], status: 401
    else
      @pm.user_id = user.id
      @pm.project_id = pm_params[:project_id]
      @pm.inviter_id = current_user.id
      @pm.admin = pm_params[:admin]
      
      # debugger
      if @pm.save
        @pm.create_alerts('invitee') if @pm.inviter_id != @pm.user_id
        render "api/project_memberships/show"
      else
        render json: @pm.errors.full_messages, status: 422
      end
    end
  end

  def index
    @pms = ProjectMembership
      .includes(:project)
      .where("user_id = ? OR inviter_id = ?", current_user.id, current_user.id)
      .where.not("inviter_id = ? AND user_id = ?", current_user.id, current_user.id)
      .where.not(projects: { id: nil })
      .order(updated_at: :asc)
      .last(10)
      
      # .order("updated_at desc")
    # @pms = ProjectMembership
    #   .includes(:project)
    #   .where("user_id = ? AND accepted = ?", current_user.id, false)
    #   .where.not(projects: { id: nil })
  end

  def update
    @pm = ProjectMembership.find(params[:id]);

    if @pm.update_attributes(pm_params)
      @pm.create_alerts('inviter') if @pm.accepted
      
      render "api/project_memberships/update"
    else
      render json: @pm.errors.full_messages, status: 422
    end

  end

  private

  def pm_params
    params.require(:pm).permit(:email, :project_id, :admin, :accepted, :inviter_id)
  end
end
