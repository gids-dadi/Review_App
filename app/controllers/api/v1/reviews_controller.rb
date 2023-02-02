class Api::V1::ReviewsController < ApplicationController
  protect_from_forgery with: :null_session

  def create
    @review = Review.new(review_params)

    if @review.save
      render json: @review, status: 200
    else
      render json: { error: @review.errors.messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @review = Review.find(params[:id])

    if @review.destroy
      render json: @review, status: 200
    else
      render json: { error: @review.errors.messages }, status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.require(:review).permit(:title, :description, :score, :item_id)
  end
end
