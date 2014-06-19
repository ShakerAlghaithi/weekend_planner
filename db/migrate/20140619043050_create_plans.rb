class CreatePlans < ActiveRecord::Migration
  def change
    create_table :plans do |t|
      t.text :text
      t.references :user, index: true

      t.timestamps
    end
  end
end
