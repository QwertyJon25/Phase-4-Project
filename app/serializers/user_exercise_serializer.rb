class UserExerciseSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :exercise_id
end
