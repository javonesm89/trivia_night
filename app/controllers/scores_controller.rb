class ScoresController < ApplicationController
    def index
        @scores = Score.all
        render json: @scores
    end

    def show
        @score = Score.find(params[:id])
        render json: @score
    end    

    def new
        @score = Score.new
    end


    def create
        # @category = Category.find_by(subject: params["category_id"])
        @score = Score.create(params.permit(:user, :category_id, :points))
        render json: @score
    end

    def edit
        @score = Score.find(params[:id])
    end

    def update
        @score = Score.find(params[:id])
        @score.update(score_params)
        render json: @score
    end
    
    
    def delete
        @score = Score.find(params[:id])
        @score.destroy 
        render json: @score
    end


    private
    def score_params
         params.permit(:user, :points)
    end

end