class UserSerializer < ActiveModel::Serializer
  attributes :id, :name

  has_many :user_exercises
  has_many :exercises
end
