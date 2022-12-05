class CreateConcerts < ActiveRecord::Migration[6.1]
  def change
    create_table :concerts do |t|
      t.string :headline
      t.string :subtitle
      t.string :image
      t.string :date
      t.string :doors
      t.string :start_time
      t.float :ticket_price

      t.timestamps
    end
  end
end
