Rails.application.routes.draw do
  
  devise_for :users
  
  # get   'users/:id'   =>  'users#show'
  resources :users, only: [:edit, :update]

  root  'chatspace#index'
  # get     'chatspace'       => 'chatspace#index'
end
