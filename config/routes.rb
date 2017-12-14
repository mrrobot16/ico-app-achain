Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :term_agreements
  get 'contract', controller: 'pages', action:'contract'
  get '/', controller: 'pages', action: 'index'
  get '/join-ico', controller: 'term_agreements', action:'new'
end
