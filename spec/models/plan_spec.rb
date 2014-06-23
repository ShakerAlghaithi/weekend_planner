require 'spec_helper'

describe Plan do
  subject { FactoryGirl.create(:plan)}
  describe 'contant' do
    it 'should have a contant' do
      subject.should be_valid
    end
    it 'should have a minimum of 5 characters' do
      subject.should be_valid
    end
  end
end