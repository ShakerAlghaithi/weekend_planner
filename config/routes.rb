Rails.application.routes.draw do
  devise_for :users
  root 'plans#index'
  get "plans/about", to: 'plans#about'
  resources :plans do
    resources :comments
  end
end
