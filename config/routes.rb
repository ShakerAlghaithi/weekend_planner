Rails.application.routes.draw do
  devise_for :users
  root 'plans#index'
  get '/plans/search', to: 'plans#search'
  resources :plans
  get '/plans/:id', to: 'plans#show'
end
