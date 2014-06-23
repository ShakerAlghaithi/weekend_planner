require 'spec_helper'

RSpec.describe PlansController, :type => :controller do
  describe 'with logged in user' do #test if the user is logged in and return 200 response
    before :each do
       @user = FactoryGirl.create :user
       sign_in @user
    end
    describe 'get index' do
      it 'renders the index view' do
        get :index
        response.status.should be(200)
        response.should render_template :index
      end
     end
  end
  describe 'without logged in user' do
    describe 'get index' do  # if the user is not logged in and return 302 response
      it 'should redirect to login page' do
        get :index
        response.status.should be(302)
      end
     end

  end
end