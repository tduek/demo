Demo.Collections.SearchResults = Backbone.Collection.extend({

	initialize: function () {
		this.searchInfo = {};
	},

	parse: function (response) {
		this.searchInfo.totalPages = response.total_pages;

		return response.search_results;
	},

	url: "/api/search",

	model: function (attrs) {
		var type = attrs._type;
		delete attrs._type;

		var newModel;
		// if (type === "User") {
		// 	newModel = new Demo.Models.User(attrs);
		// } else if (type === "Post") {
		// 	newModel = new Demo.Models.Post(attrs);
		// }

		newModel = new Demo.Models[type](attrs);

		return newModel;
	}

});