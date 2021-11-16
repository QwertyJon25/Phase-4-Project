class Exercise < ApplicationRecord
    belongs_to :equipment
    has_many :user_exercises
    has_many :users, through: :user_exercises
end
