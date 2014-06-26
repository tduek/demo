class UsersController < ApplicationController

  def index
    @users = User.all
  end

  def show
    @user = User.find(params[:id])
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      flash[:success] = "Created account successfully! Welcome #{ @user.email }"
      redirect_to @user
    else
      flash.now[:alert] = "Failed to create account. Check below."
      render :new
    end
  end


  private

  def user_params
    params.require(:user).permit(:email, :password, :picture)
  end

end
