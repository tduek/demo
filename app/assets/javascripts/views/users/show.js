Demo.Views.UserShow = Backbone.View.extend({

	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
	},

	template: JST["users/show"],

	render: function () {
		var content = this.template({ model: this.model });
		this.$el.html(content);

		return this;
	}

});