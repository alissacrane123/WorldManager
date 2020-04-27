class Api::AlertsController < ApplicationController

  def index
   
    if current_user
      # task_alerts = Alert.includes(alertable: [:project, :user]).where('user_id = ? AND alertable_type = ?', current_user.id, 'Task')
      user_id = current_user.id

      task_alerts = Alert.fetch_task_alerts(user_id)

      # pm_alerts = Alert.includes(alertable: [:project, :user, :inviter]).where('user_id = ? AND alertable_type = ?', current_user.id, 'ProjectMembership')
      
      pm_alerts = Alert.fetch_pm_alerts(user_id)

      @alerts = task_alerts + pm_alerts

    end
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
