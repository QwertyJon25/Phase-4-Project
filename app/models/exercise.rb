class Exercise < ApplicationRecord
    validates :name, :image, :description, :category, presence: true


    belongs_to :equipment
    has_many :user_exercises
    has_many :users, through: :user_exercises
end
