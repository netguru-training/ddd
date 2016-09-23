Rails.application.routes.draw do
  resources :quotes
  devise_for :users
  mount API::V1::Users => '/api'

  get '/' => 'app#index'
  get '/admin' => 'app#admin'
  get '/counter' => 'app#counter'
  get '/bash' => 'app#bash'
end
