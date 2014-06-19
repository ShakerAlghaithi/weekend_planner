class PlansController < ApplicationController
  #before_action :authenticate_user!
  before_action :find_plan, only: [:show, :edit, :update]
  def index
    @plans = Plan.all
  end
  def new
    @plan = Plan.new
  end
  def create
    @plan = Plan.new plan_params
    @plan.save
    redirect_to plans_path
  end
  def show
   @plan = @plan.text
  end
  def edit
  end
  def update
    @plan.update plan_params
    redirect_to root_path
  end
  def destroy
    Plan.find(params[:id]).destroy
    redirect_to root_path
  end
  private
  def find_plan
     @plan = Plan.find(params[:id])
  end
  def plan_params
    params.require(:plan).permit(:text)
  end
end
