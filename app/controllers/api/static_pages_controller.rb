class Api::StaticPagesController < ApplicationController

  def search
    @search_results = PgSearch
      .multisearch(params[:query])
      .page(params[:page])

      # .includes(:searchable)
    # render json: @search_results
  end

end