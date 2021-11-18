class UserSerializer < ActiveModel::Serializer
  attributes :id, :username

  # has_many :user_exercises
  # has_many :exercises
end
