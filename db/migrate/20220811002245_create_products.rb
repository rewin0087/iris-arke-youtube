class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.string :youtube_url
      t.string :youtube_id
      t.string :image
      t.string :kind, default: 'standard'
      t.integer :timecode, default: 0

      t.timestamps
    end
  end
end
