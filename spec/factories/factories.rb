FactoryGirl.define do

  sequence :email do |n|
    "email#{n}@factory.com"
  end

  factory :user do
    email
    password "password"
    password_confirmation "password"
  end
  factory :plan do
    contant "The best plan for the weekends!"
  end
end