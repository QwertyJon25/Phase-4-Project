class UserExerciseSerializer < ActiveModel::Serializer
  attributes :id

  has_one :user
  has_one :exercise
end
