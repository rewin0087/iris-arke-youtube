class Product < ApplicationRecord
  mount_uploader :image, ImageUploader
  enum kind: { featured: 'featured', standard: 'standard' }
end
