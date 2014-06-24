class CommentsController < ApplicationController
    before_action :load_plan   #to associate the comment to the plan

  def index
    @comments = @plan.comments
  end
  def show
    @comment = @plan.comments.find(params[:id])
  end
  def create
    @comment = @plan.comments.new(comment_params)
    respond_to do |format|
      if @comment.save
        format.html { redirect_to @comment, notice: 'Plan was successfully created.' }
        format.json { render json: { success: true } , status: :created, location: (plan_comment_path @plan, @comment) }
      else
        format.html { render :new }
        format.json { render json: @comment.errors, status: :unprocessable_entity }
      end
    end
  end
  private
  def comment_params
    params.require(:comment).permit(:text)
  end
  def load_plan
    @plan = Plan.find(params[:plan_id])
  end
end
