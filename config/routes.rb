Rails.application.routes.draw do
  
  resources :equipments, only:[:index, :show]
  resources :exercises, only: [:index, :show, :create, :destroy]
  resources :user_exercises, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :show]

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
