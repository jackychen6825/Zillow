Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show]
  end
  
  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy] 
  end

  namespace :api, defaults: {format: :json} do
    resources :properties, only: [:create, :index, :show] 
  end

  namespace :api, defaults: {format: :json} do 
    resources :saves, only: [:create, :destroy]
  end 
  
  root to: "static_pages#root"
end
