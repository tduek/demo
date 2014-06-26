Demo::Application.routes.draw do

  root to: 'users#index'

  resources :users, only: [:index, :show, :new, :create]

  resources :posts, only: :show

end
