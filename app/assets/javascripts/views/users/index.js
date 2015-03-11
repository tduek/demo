Demo.Views.UsersIndex = Backbone.View.extend({

	initialize: function () {
		this.listenTo(this.collection, "sync", this.render);
	},

	template: JST["users/index"],

	render: function () {
		var content = this.template({ collection: this.collection });
		this.$el.html(content);

		return this;
	},

});