class Api::ProjectMembershipsController < ApplicationController

  def create

  end

  def destroy

  end

  private

  def pm_params
    params.require(:project_membership).permit(:email, :project_id)
  end
end
