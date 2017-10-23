class PagesController < ApplicationController
  def index
    @accepted = cookies.encrypted[:accepted_terms]
    redirect_to '/' unless @accepted
    
  end
end
