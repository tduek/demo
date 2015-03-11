Demo::Application.routes.draw do

  root to: 'users#index' # "static_pages#root" #'users#index'

  resources :users

  resources :posts, only: :show

  namespace :api, defaults: {format: :json} do
    resources :users
    resources :posts
  end

end
