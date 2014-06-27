Demo::Application.routes.draw do

  root to: 'users#show'

  resources :users, only: [:index, :show, :new, :create]

  resources :posts, only: :show

  resource :session, :only => [:create, :destroy, :new]

  get '/auth/facebook/callback', to: 'oauth_callbacks#facebook'

end
