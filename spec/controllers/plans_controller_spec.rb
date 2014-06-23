require 'spec_helper'

RSpec.describe PlansController, :type => :controller do
  describe 'get index' do
    it 'renders the index view' do
      expect {User.new(id: "1", email: "rspec@test.com", password: "12345678", password_confirmation: "12345678")}
      get :index, FactoryGirl.attributes_for(:plan, user: @user)
      response.should render_template :index
    end
  end
end