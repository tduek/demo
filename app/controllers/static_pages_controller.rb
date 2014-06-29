class StaticPagesController < ApplicationController

  def search

    if !params[:query].blank?
      @results = PgSearch.multisearch(params[:query])
                         .includes(:searchable)
                         .page(params[:page])
    else
      @results = PgSearch::Document.all.page(params[:page])
    end

  end

end