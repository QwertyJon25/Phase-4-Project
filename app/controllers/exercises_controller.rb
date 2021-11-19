class ExercisesController < ApplicationController
    def index
        exercises = Exercise.all
        render json: exercises, status: :ok
    end

    def show
        exercise = Exercise.find_by(id: params[:id])
        if exercise
            render json: exercise, status: :ok
        else
            render json: { error: "Exercise not found" }, status: :not_found
        end
    end

    def create
        exercise = Exercise.create(exercise_params)
        if exercise
            render json: exercise, status: :created
        else
            render json: { errors: "Not Found"}, status: :not_found
    end
end

    def update
        exercise = Exercise.find_by(id: params[:id])
        if exercise
            render json: exercise, status: :ok
        else 
            render json: { errors: "Not Found"}, status: :not_found
        end
    end

    def destroy
        exercise = Exercise.find_by(id: params[:id])
        if exercise
            exercise.destroy
            head :no_content
        else 
            render json: { error: "Exercise not found" }, status: :not_found
        end
    end

    private

    def exercise_params
        params.permit(:name, :image, :description, :category, :equipment_id)

    end
end