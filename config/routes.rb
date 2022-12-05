Rails.application.routes.draw do
  
  resources :concert_bands
  resources :bands
  resources :concessions
  resources :concerts
  resources :tickets
  resources :users
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
