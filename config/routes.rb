Rails.application.routes.draw do
  resources :term_agreements
  get 'contract', controller: 'pages', action:'contract'
  get '/', controller: 'pages', action: 'index'
  get '/join-ico', controller: 'term_agreements', action:'new'
end
