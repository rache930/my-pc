class Category < ActiveHash::Base
  self.data = [
    { id: 1, name: 'MAC' },
    { id: 2, name: 'Microsoft' },
    { id: 3, name: 'Panasonic' },
    { id: 4, name: 'Dynabook' },
    { id: 5, name: 'Fujitsu' },
    { id: 6, name: 'VAIO' },
    { id: 7, name: 'Mouse' },
    { id: 8, name: 'NEC' },
    { id: 9, name: 'DELL' },
    { id: 10, name: 'Lenovo' },
    { id: 11, name: 'その他' }
  ]

  include ActiveHash::Associations
  has_many :items
end
