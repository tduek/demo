class UsersController < ApplicationController

  def index
    @users = User.includes(:authored_posts).all
  end

  def show
    @user = User.find(params[:id])
  end

end
