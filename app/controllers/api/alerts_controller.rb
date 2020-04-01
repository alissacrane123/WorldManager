class Api::AlertsController < ApplicationController

  def index
    @alerts = Alert.includes(:alertable).where(user_id: current_user.id)
  end

  def create

  end

  def update_all
    @alerts = Alert.includes(:alertable).find(params[:alert_ids])
    @alerts.each do |alert|
      alert.update(checked: true )
    end

    render "api/alerts/index"
  end

  def destroy
    
  end

  private

  def alert_params
    params.require(:alert).permit(:user_id, :alertable_id, :alertable_type, :checked)
  end
end
