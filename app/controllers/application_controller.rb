class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?, :titleize

  private

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end

  def require_logged_in
    unless current_user
      render json: { base: ['Must be logged in'] }, status: 401
    end
  end

  def format_date(date) 
    # debugger
    DateTime.strptime(date, '%m/%d/%Y')
  end

  def titleize(string)
    other_words = [ "and", "a", "or", "for"];
    words = string.split(' ').map do |word|
      other_words.include?(word.downcase) ? word : word.capitalize
    end
    words.join(' ')
    # string.split(' ').map(&:capitalize).join(' ');
  end


end
