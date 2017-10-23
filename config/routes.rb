Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # root 'home_page#index'
  resources :term_agreements
  get 'contract', controller: 'pages', action:'index'
  root 'term_agreements#new'
end
