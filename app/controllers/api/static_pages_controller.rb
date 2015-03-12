class Api::StaticPagesController < ApplicationController

  def search
    @search_results = PgSearch.multisearch(params[:query])

    render :search
  end

end