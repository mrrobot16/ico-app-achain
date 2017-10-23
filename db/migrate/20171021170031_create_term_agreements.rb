class CreateTermAgreements < ActiveRecord::Migration[5.1]
  def change
    create_table :term_agreements do |t|
      t.string :shareholder_address
      t.string :term_accepted
      t.integer :counter, default: 0
      t.timestamps
    end
  end
end
