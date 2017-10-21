class TermAgreementsController < ApplicationController

  def new
    @term_agreement = TermAgreement.new
  end
  def create

  end

  private
  def term_agreement_params
    params.require(:term_agreement).permit(:shareholder_address, :term_accepted)
  end

end
