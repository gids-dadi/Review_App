class Api::V1::ItemsController < ApplicationController

  def index
    @items = Item.all

    render json: @items
  end

  def show
  @item = Item.find_by(slug: params[:slug])

      render json: @item
  end


  def create
    @item = Item.new(items_params)

    if @item.save
     flash[:success] = 'New Item created successfully'
    else 
         flash.now[:error] = 'An error occurred : Item could not be created'
    end
  end


    def update
    @item = Item.find_by(slug: params[:slug])

    if @item.update(items_params)
     flash[:success] = 'Item updated successfully'
    else 
         flash.now[:error] = 'An error occurred : Item could not be Updated'
    end
  end

    def destroy
     @item = Item.find_by(slug: params[:slug])

    if @item.destroy
     flash[:success] = 'Item deleted successfully'
    else 
         flash.now[:error] = 'An error occurred : Item could not be deleted'
    end
  end
  private

  def items_params
    params.require(:item).permit(:name, :image_url)
  end
end
