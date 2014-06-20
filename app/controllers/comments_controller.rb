class CommentsController < ApplicationController
  def index
    @comment = Comment.all
  end
end
