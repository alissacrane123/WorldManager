Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :projects, only: [:create, :show, :index, :destroy, :update]
    resources :tasks, only: [:create, :show, :index, :destroy, :update]
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :project_memberships, only: [:create, :index, :update, :destroy]
    
  end

  root "static_pages#root"


end
