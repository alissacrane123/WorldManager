class Api::PostsController < ApplicationController
  def create
    @post = Post.new(post_params)
    @post.user_id = current_user.id 
    if @post.save
      render "api/posts/show"
    else
      render json: @post.errors.full_messages
    end
  end


  private

  def post_params
    params.require(:post).permit(:project_id, :task_id, :body)
  end
end
