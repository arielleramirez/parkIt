class User < ApplicationRecord
  has_many :vehicles
  has_many :parking_spaces
end
