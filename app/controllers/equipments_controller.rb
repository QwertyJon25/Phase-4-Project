class EquipmentController < ApplicationController
    def index
        equipments = Equipment.all
        render json: equipments, status: :ok
    end

    def show
        equipment = Equipment.find_by(id: params[:id])
        if equipment
            render json: equipment, status: :ok
        else
            render json: { error: "Equipment not found" }, status: :not_found
        end
    end
