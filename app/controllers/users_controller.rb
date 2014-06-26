class UsersController < ApplicationController
  before_action :require_signed_in!, :only => [:show]
  before_action :require_signed_out!, :only => [:create, :new]


  def index
    @users = User.all
  end

  def show
    if params.include?(:id)
      @user = User.find(params[:id])
    else
      @user = current_user
    end
  end

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      flash[:success] = "Created account successfully! Welcome #{ @user.email }"
      redirect_to @user
    else
      flash.now[:alert] = "Failed to create account. Check below."
      render :new
    end
  end


  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :picture)
  end

end
