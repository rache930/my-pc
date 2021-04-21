class ItemsController < ApplicationController
  before_action :authenticate_user!, only:[:new]
  def index
    @items = Item.includes(:user).order("created_at DESC")
  end

  def new
    @item = Item.new
  end

  def create
    @item = Item.new(item_params)
    if @item.save
      redirect_to root_path
    else
      render :new
    end
  end

  private
  def item_params
    params.require(:item).permit(:pc_name, :nickname, :about, :price,
                                 :category_id, :start_date, :end_date, :image
                                ).merge(user_id: current_user.id)
  end
end
