Demo::Application.routes.draw do

  root to: "static_pages#root" #'users#index'


  resources :users, only: [:index, :show]

  resources :posts, only: :show

  namespace :api, defaults: {format: :json} do
    get "/search", to: "static_pages#search"
    resources :users
    resources :posts
  end

end
