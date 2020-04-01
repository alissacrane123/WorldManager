Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resources :projects, only: [:create, :show, :index, :destroy, :update]
    resources :tasks, only: [:create, :show, :index, :destroy, :update]
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :project_memberships, only: [:create, :index, :update, :destroy]
    resources :posts, only: [:create, :index, :update, :show, :destroy]
    # resources :notifications, only: [:create, :index, :destroy]
    resources :notifications, only: [:create, :index, :destroy] do
      collection do
        patch 'update_all'
      end
    end
  end

  root "static_pages#root"



end
