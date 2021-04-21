class Item < ApplicationRecord
  extend ActiveHash::Associations::ActiveRecordExtensions
  belongs_to :category
  belongs_to :user
  has_one_attached :image

  with_options presence: true do
    validates :image
    validates :pc_name
    validates :nickname
    validates :about
    validates :price
    validates :category_id
  end
end
