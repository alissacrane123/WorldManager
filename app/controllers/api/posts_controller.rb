class Api::PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    if @post.save
      render "api/posts/show"
    else
      render json: @post.errors.full_messages
    end
  end

  def index
    if params[:project_id]
      @posts = Post.includes(:user).where("project_id = ?", params[:project_id])
    elsif params[:task_id]
      @posts = Post.includes(:user).where("task_id = ?", params[:task_id])
    else
      @posts = Post.includes(:user).all
    end
  end


  private

  def post_params
    params.require(:post).permit(:project_id, :task_id, :body, :user_id)
  end
end
