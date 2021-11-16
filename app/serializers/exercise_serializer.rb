class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :category, :equipment_id
end
