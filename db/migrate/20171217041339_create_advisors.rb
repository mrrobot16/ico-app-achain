class CreateAdvisors < ActiveRecord::Migration[5.1]
  def change
    create_table :advisors do |t|
      t.string :name
      t.string :linkedin_url
      t.string :role
      t.string :image_url
      t.timestamps
    end
  end
end
