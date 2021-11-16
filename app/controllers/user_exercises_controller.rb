class UserExercisesController < ApplicationController
    def index
        user_exercises = UserExercise.all
        render json: user_exercises, status: :ok
    end

    def show
        user_exercise = UserExercise.find_by(id: params[:id])
        if user_exercise
            render json: user_exercise, status: :ok
        else
            render json: { error: "User exercise not found" }, status: :not_found
    end
end

    def create
        user_exercise = UserExercise.create(user_exercise_params)
        if user_exercise
            render json: user_exercise, status: :created
        else
            render json: { errors: "User exercise not created" }, status: :not_found
        end
    end

    def destroy
        user_exercise = UserExercise.find_by(id: params[:id])
        if user_exercise
            user_exercise.destroy
            head :no_content
        else 
            render json: { error: "User exercise not found" }, status: :not_found
        end
    end

    private

    def user_exercise_params
        params.permit(:user_id, :exercise_id)
    end
end
