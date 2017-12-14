class TermAgreementsController < ApplicationController
  def index
    @term_agreements = TermAgreement.all
  end

  def new
    @term_agreement = TermAgreement.new
  end

  def create
    shareholder_address = term_agreement_params[:shareholder_address]
    @term_agreement = TermAgreement.find_by_shareholder_address(shareholder_address)
    if @term_agreement
      p "IF"
      cookies.encrypted[:accepted_terms] = true
      @term_agreement.counter = @term_agreement.counter + 1
      @term_agreement.save
      redirect_to '/contract'
    else
      p "ELSE"
      @term_agreement = TermAgreement.new(shareholder_address: shareholder_address)
      @term_agreement.term_accepted = true if accepted_all_terms?
      respond_to do |format|
        if @term_agreement.save
          p "IF IN ELSE"
          cookies.encrypted[:accepted_terms] = true
          format.html { redirect_to contract_path }
        else
          p "ELSE ELSE"
          # format.html { redirect_to '/'}
          format.html { render :new }
        end
      end
    end

  end

  private
    def accepted_all_terms?
      has_check_one = (term_agreement_params[:check_one].to_i === 1)
      has_check_two = (term_agreement_params[:check_two].to_i === 1)
      has_check_three = (term_agreement_params[:check_three].to_i === 1)
      has_check_four = (term_agreement_params[:check_four].to_i === 1)
      has_check_one && has_check_two && has_check_three && has_check_four
    end

    def term_agreement_params
      params.require(:term_agreement).permit(
        :shareholder_address,
        :check_one, :check_two, :check_three, :check_four
      )
    end
end
