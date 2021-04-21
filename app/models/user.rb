class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  
  has_many :items

  valid_password = /\A(?=.*?[a-z])(?=.*?\d)[a-z\d]{6,}+\z/i

  with_options presence: true do
    validates :password, on: :create, format: { with: valid_password, message: 'is invalid. Input half-width characters.' }
    validates :name, format: { with: /\A[ぁ-んァ-ヶ一-龥々ー]+\z/, message: 'is invalid. Input full-width characters.' }
    validates :profile
    validates :number, uniqueness: true
  end
end
