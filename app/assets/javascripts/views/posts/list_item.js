Demo.Views.PostListItem = Backbone.View.extend({

	template: JST["posts/list_item"],

	tagName: "li",

	render: function () {
		var content = this.template({ post: this.model });
		this.$el.html(content);

		return this;
	},

});