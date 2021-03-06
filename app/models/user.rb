class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
   
    has_many :user_exercises
    has_many :exercises, through: :user_exercises
end
