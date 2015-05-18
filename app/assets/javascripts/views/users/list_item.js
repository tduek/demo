Demo.Views.UserListItem = Backbone.View.extend({

	template: JST["users/list_item"],

	tagName: "li",

	render: function () {
		var content = this.template({ user: this.model });
		this.$el.html(content);

		return this;
	},

});