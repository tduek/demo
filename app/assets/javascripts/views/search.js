Demo.Views.Search = Backbone.View.extend({

	initialize: function () {
		this.searchResults = new Demo.Collections.SearchResults();
		this.listenTo(this.searchResults, "sync", this.render);
	},

	events: {
		"change .query": "search",
	},

	template: JST.search,

	render: function () {
		var content = this.template({
			results: this.searchResults
		});
		this.$el.html(content);

		return this;
	},

	search: function (event) {
		event.preventDefault();

		var query = this.$(".query").val();

		this.searchResults.fetch({
			data: {
				query: query
			}
		});
	},

});