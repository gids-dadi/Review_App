Rails.application.routes.draw do
  root 'root#index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  root 'pages#index'

  namespace :api do
    namespace :v1 do
      resources :items, param: :slug
      resources:reviews, only: [:create, :destroy]
    end
  end
  # Defines the root path route ("/")
  # root "articles#index"

  get '*path', to: 'pages#index', via: :all
end
