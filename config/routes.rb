Rails.application.routes.draw do
  
  devise_for :users

  # root  'chatspace#index'
  root 'groups#index'
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  
  
  # resources :users, only: [:edit, :update]

  
  # get     'chatspace'       => 'chatspace#index'
  end
end

