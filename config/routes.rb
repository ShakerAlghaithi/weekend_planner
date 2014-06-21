Rails.application.routes.draw do
  devise_for :users
  root 'plans#index'
  resources :plans
  resources :comments
end
