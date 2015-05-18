Demo::Application.routes.draw do

  root to: "static_pages#root" #'users#index'

  resources :users, only: [:index, :show]

  resources :posts, only: :show

  namespace :api, defaults: {format: :json} do
    resources :users
    resources :posts

    get "search", to: "static_pages#search"
  end

end
