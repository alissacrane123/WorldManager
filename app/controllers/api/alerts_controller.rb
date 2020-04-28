class Api::AlertsController < ApplicationController

  def index
   
    if current_user
      user_id = current_user.id

      task_alerts = Alert.fetch_task_alerts(user_id)
      
      pm_alerts = Alert.fetch_pm_alerts(user_id)

      recent = Alert.fetch_recent_alerts(user_id)

      @alerts = task_alerts + pm_alerts + recent

    end
  end

  def create

  end

  def update_all
    @alerts = Alert.includes(:alertable).find(params[:alert_ids])
    @alerts.each do |alert|
      # if alert.alertable_type == 'ProjectMembership' && alert.alertable.accepted
      if alert.alertable_type == 'ProjectMembership' 
        alert.update(checked: true )
      elsif alert.alertable_type == 'Task'
        alert.update(checked:true)
      end
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
