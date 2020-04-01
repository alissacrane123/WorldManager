class Api::NotificationsController < ApplicationController

  def index
    @notifications = current_user.notifications
  end

  def create

  end

  def update_all
    @notifications = Notification.find(params[:notification_ids])
    @notifications.each do |notif|
      notif.update(checked: true )
    end

    render "api/notifications/index"
  end

  def destroy
    
  end

  private

  def notification_params
    params.require(:notification).permit(:user_id, :notifiable_id, :notifiable_type, :checked)
  end
end
