class CreateConcertBands < ActiveRecord::Migration[6.1]
  def change
    create_table :concert_bands do |t|
      t.integer :band_id
      t.integer :concert_id

      t.timestamps
    end
  end
end
