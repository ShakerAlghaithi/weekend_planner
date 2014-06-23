Rails.application.routes.draw do
  devise_for :users
  root 'plans#index'

  resources :plans do
    resources :comments
  end
end
