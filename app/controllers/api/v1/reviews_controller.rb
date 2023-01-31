class Api::V1::ReviewsController < ApplicationController
  
  def create
    review = Review.new(review_params)

 if review.save
     flash[:success] = 'New Review created successfully'
    else 
         flash.now[:error] = 'An error occurred : Review could not be created'
    end
  end

    def destroy
    review = Review.find(params[:id])

 if review.destroy
     flash[:success] = 'Review deleted successfully'
    else 
         flash.now[:error] = 'An error occurred : Review could not be deleted'
    end
  end


  private

  def review_params
    params.require(:review).permit(:title, :description, :score, :item_id)
  end
end
