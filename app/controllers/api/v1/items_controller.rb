class Api::V1::ItemsController < ApplicationController
  protect_from_forgery with: :null_session
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
      render json: @item, status: 200
    else
      render json: { error: @item.errors.messages }, status: :unprocessable_entity
    end
  end

  def update
    @item = Item.find_by(slug: params[:slug])

    if @item.update(items_params)
      render json: @item, status: 200
    else
      render json: { error: @item.errors.messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @item = Item.find_by(slug: params[:slug])

    if @item.destroy
      render json: @item, status: 200
    else
      render json: { error: @item.errors.messages }, status: :unprocessable_entity
    end
  end

  private

  def items_params
    params.require(:item).permit(:name, :image_url)
  end
end
