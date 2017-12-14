class PagesController < ApplicationController
  def index
  end

  def home
  end

  def contract
    @accepted = cookies.encrypted[:accepted_terms]
    redirect_to '/join-ico' unless @accepted
  end
end
